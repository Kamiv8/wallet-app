using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using WalletApp.API.Authorization;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.commands;
using WalletApp.API.Models.Users.Response;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.User;

public class AuthenticateCommandHandler: IRequestHandler<AuthenticationCommand, OperationResult<string>>
{
    private readonly DataContext _dataContext;
    private readonly IJwtUtils _jwtUtils;
    private readonly IMapper _mapper;
    private readonly AppSettings _appSettings;
    private readonly IEmailService _emailService;


    public AuthenticateCommandHandler(
        DataContext dataContext,
        IJwtUtils jwtUtils,
        IMapper mapper,
        IOptions<AppSettings> appSettings,
        IEmailService emailService)
    {
        _dataContext = dataContext;
        _jwtUtils = jwtUtils;
        _mapper = mapper;
        _appSettings = appSettings.Value;
        _emailService = emailService;
    }


    public async Task<OperationResult<string>> Handle(AuthenticationCommand command, CancellationToken cancellationToken)
    {

        var user = await _dataContext.Users.SingleOrDefaultAsync(u => u.Email == command.Email);


        if (user == null || !user.isVerified || !BCrypt.Net.BCrypt.Verify(command.Password, user.PasswordHash))
        {
            throw new AppException("Email or password is incorrect");
        }

        var jwtToken = _jwtUtils.GenerateJwtToken(user);
        var refreshToken = _jwtUtils.GenerateRefreshToken(command.IpAddress);
        user.RefreshTokens.Add(refreshToken);
        
        RemoveOldRefreshTokens(user);

        _dataContext.Update(user);
        _dataContext.SaveChanges();


        var response = _mapper.Map<Authenticate>(user);
        response.JwtToken = jwtToken;
        response.RefreshToken = refreshToken.Token;
        

        return OperationResult<string>.Success(response.RefreshToken);
    }
    
    private void RemoveOldRefreshTokens(Entities.User user)
    {
        user.RefreshTokens.RemoveAll(t =>
            !t.IsActive && t.Created.AddDays(_appSettings.RefreshTokenTTL) <= DateTime.UtcNow);
    }
}