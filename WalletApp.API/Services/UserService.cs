using System.Security.Cryptography;
using AutoMapper;
using Microsoft.Extensions.Options;
using MimeKit.Encodings;
using WalletApp.API.Authorization;
using WalletApp.API.Entities;
using WalletApp.API.Helpers;
using WalletApp.API.Models.Users.Dto;
using WalletApp.API.Models.Users.Response;

namespace WalletApp.API.Services;

public interface IUserService
{
    Authenticate Authenticate(AuthenticateDTO authenticateDto, string ipAddress);
    Authenticate RefreshToken(string token, string ipAddress);
    void RevokeToken(string token, string ipAddress);
    void Register(RegisteredDto registeredDto, string origin);
    void VerifyEmail(string token);
    void ForgotPassword(ForgotPasswordDTO forgotPasswordDto, string origin);
    void ValidateResetToken(ValidateResetTokenDTO validateResetTokenDto);
    void ResetPassword(ResetPasswordDTO resetPasswordDto, string token);
}

public class UserService : IUserService
{
    private readonly DataContext _dataContext;
    private readonly IJwtUtils _jwtUtils;
    private readonly IMapper _mapper;
    private readonly IEmailService _emailService;
    private readonly AppSettings _appSettings;

    public UserService(
        DataContext dataContext,
        IJwtUtils jwtUtils,
        IMapper mapper,
        IOptions<AppSettings> appSettings,
        IEmailService emailService)
    {
        _dataContext = dataContext;
        _jwtUtils = jwtUtils;
        _mapper = mapper;
        _emailService = emailService;
        _appSettings = appSettings.Value;
    }


    public Authenticate Authenticate(AuthenticateDTO authenticateDto, string ipAddress)
    {
        var user = _dataContext.Users.SingleOrDefault(u => u.Email == authenticateDto.Email);


        if (user == null || !user.isVerified || !BCrypt.Net.BCrypt.Verify(authenticateDto.Password, user.PasswordHash))
        {
            throw new AppException("Email or password is incorrect");
        }

        var jwtToken = _jwtUtils.GenerateJwtToken(user);
        var refreshToken = _jwtUtils.GenerateRefreshToken(ipAddress);
        user.RefreshTokens.Add(refreshToken);
        
        RemoveOldRefreshTokens(user);

        _dataContext.Update(user);
        _dataContext.SaveChanges();


        var response = _mapper.Map<Authenticate>(user);
        response.JwtToken = jwtToken;
        response.RefreshToken = refreshToken.Token;
        
        return response;
    }


    public Authenticate RefreshToken(string token, string ipAddress)
    {
        var user = GetAccountByRefreshToken(token);

        var refreshToken = user.RefreshTokens.Single(x => x.Token == token);

        if (refreshToken.IsRevoked)
        {
            RevokeDescendantRefreshTokens(refreshToken, user, ipAddress,
                $"Attempted reuse of revoked ancestor token: {token}");
        }

        if (!refreshToken.IsActive)
        {
            throw new AppException("Invalid token");
        }

        var newRefreshToken = RotateRefreshToken(refreshToken, ipAddress);
        user.RefreshTokens.Add(newRefreshToken);
        
        RemoveOldRefreshTokens(user);

        _dataContext.Update(user);
        _dataContext.SaveChanges();

        var jwtToken = _jwtUtils.GenerateJwtToken(user);

        var response = _mapper.Map<Authenticate>(user);
        response.JwtToken = jwtToken;
        response.RefreshToken = newRefreshToken.Token;
        return response;
    }

    public void RevokeToken(string token, string ipAddress)
    {
        var user = GetAccountByRefreshToken(token);
        var refreshToken = user.RefreshTokens.Single(t => t.Token == token);
        if (!refreshToken.IsActive)
        {
            throw new AppException("Invalid token");
        }
        RevokeRefreshToken(refreshToken, ipAddress, "Revoked without replacement");

        _dataContext.Update(user);
        _dataContext.SaveChanges();
    }


    public void Register(RegisteredDto registeredDto, string origin)
    {


    }


    public void VerifyEmail(string token)
    {
        var user = _dataContext.Users.SingleOrDefault(u => u.VerificationToken == token);

        if (user == null)
            throw new AppException("Verification failed");
        
        user.Verified = DateTime.UtcNow;
        user.VerificationToken = null;
        _dataContext.Users.Update(user);
        _dataContext.SaveChanges();
    }


    public void ForgotPassword(ForgotPasswordDTO forgotPasswordDto, string origin)
    {
        var user = _dataContext.Users.SingleOrDefault(u => u.Email == forgotPasswordDto.Email);

        if (user == null) return;

        user.ResetToken = GenerateResetToken();
        user.ResetTokenExpires = DateTime.UtcNow.AddHours(1);


        _dataContext.Users.Update(user);
        _dataContext.SaveChanges();

        SendPasswordResetEmail(user, origin);
    }

    public void ValidateResetToken(ValidateResetTokenDTO validateResetTokenDto)
    {
        GetAccountByRefreshToken(validateResetTokenDto.Token);
    }


    public void ResetPassword(ResetPasswordDTO resetPasswordDto, string token)
    {
        var user = GetAccountByResetToken(token);

        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(resetPasswordDto.Password);
        user.PasswordReset = DateTime.UtcNow;
        user.ResetToken = null;
        user.ResetTokenExpires = null;

        _dataContext.Users.Update(user);
        _dataContext.SaveChanges();
    }

    private User GetAccountByResetToken(string token)
    {
        var account = _dataContext.Users.SingleOrDefault(x =>
            x.ResetToken == token && x.ResetTokenExpires > DateTime.UtcNow);
        if (account == null) throw new AppException("Invalid token");
        return account;
    }

    private void SendPasswordResetEmail(User user, string origin)
    {
        string message;
        if (!string.IsNullOrEmpty(origin))
        {
            var resetUrl = $"{origin}/account/reset-password/{user.ResetToken}";
            message = $@"<p>Please click the below link to reset your password, the link will be valid for 1 day:</p>
                            <p><a href=""{resetUrl}"">{resetUrl}</a></p>";
        }
        else
        {
            message = $@"<p>Please use the below token to reset your password with the <code>/accounts/reset-password</code> api route:</p>
                            <p><code>{user.ResetToken}</code></p>";
        }

        _emailService.Send(
            to: user.Email,
            subject: "Sign-up Verification API - Reset Password",
            html: $@"<h4>Reset Password Email</h4>
                        {message}"
        );
        
    }

    private string GenerateResetToken()
    {
        var token = Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        
        var tokenIsUnique = !_dataContext.Users.Any(x => x.ResetToken == token);
        if (!tokenIsUnique)
            return GenerateResetToken();
        
        return token;
    }






    private RefreshToken RotateRefreshToken(RefreshToken refreshToken, string ipAddress)
    {
        var newRefreshToken = _jwtUtils.GenerateRefreshToken(ipAddress);
        RevokeRefreshToken(refreshToken, ipAddress, "Replaced by new token", newRefreshToken.Token);
        return refreshToken;
    }

    private void RevokeDescendantRefreshTokens(RefreshToken refreshToken, User user, string ipAddress, string reason)
    {
        if (!string.IsNullOrEmpty(refreshToken.ReplacedByToken))
        {
            var childToken = user.RefreshTokens.SingleOrDefault(x => x.Token == refreshToken.ReplacedByToken);
            if (childToken.IsActive)
                RevokeRefreshToken(childToken, ipAddress, reason);
            else
                RevokeDescendantRefreshTokens(childToken, user, ipAddress, reason);
        }
    }
    
    private User GetAccountByRefreshToken(string token)
    {
        var user = _dataContext.Users.SingleOrDefault(u => u.RefreshTokens.Any(t => t.Token == token));

        if (user == null)
        {
            throw new AppException("Invalid token");
        }
        return user;
    }


    private void RemoveOldRefreshTokens(User user)
    {
        user.RefreshTokens.RemoveAll(t =>
            !t.IsActive && t.Created.AddDays(_appSettings.RefreshTokenTTL) <= DateTime.UtcNow);
    }
    
    private void RevokeRefreshToken(RefreshToken token, string ipAddress, string reason = null,
        string replacedByToken = null)
    {
        token.Revoked = DateTime.UtcNow;
        token.RevokedByIp = ipAddress;
        token.ReasonRevoked = reason;
        token.ReplacedByToken = replacedByToken;
    }
    
}