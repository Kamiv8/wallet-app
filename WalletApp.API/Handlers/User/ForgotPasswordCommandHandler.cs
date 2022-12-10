using System.Security.Cryptography;
using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.User;

public class ForgotPasswordCommandHandler : IRequestHandler<ForgotPasswordCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IEmailService _emailService;

    public ForgotPasswordCommandHandler(
        DataContext dataContext,
        IEmailService emailService)
    {
        _dataContext = dataContext;
        _emailService = emailService;
    }

    
    public Task<Unit> Handle(ForgotPasswordCommand command, CancellationToken cancellationToken)
    {
        var account = _dataContext.Users.SingleOrDefault(x => x.Email == command.Email);

        if (account == null) return Task.FromResult(Unit.Value);

        account.ResetToken = GenerateResetToken();
        account.ResetTokenExpires = DateTime.UtcNow.AddDays(1);

        _dataContext.Users.Update(account);
        _dataContext.SaveChanges();

        SendPasswordResetEmail(account, command.Origin);

        return Task.FromResult(Unit.Value);
    }
    
    private string GenerateResetToken()
    {
        // token is a cryptographically strong random sequence of values
        var token = Convert.ToHexString(RandomNumberGenerator.GetBytes(64));

        // ensure token is unique by checking against db
        var tokenIsUnique = !_dataContext.Users.Any(x => x.ResetToken == token);
        if (!tokenIsUnique)
            return GenerateResetToken();
        
        return token;
    }
    
    
    private void SendPasswordResetEmail(Entities.User account, string origin)
    {
        string message;
        if (!string.IsNullOrEmpty(origin))
        {
            var resetUrl = $"{origin}/account/reset-password?token={account.ResetToken}";
            message = $@"<p>Please click the below link to reset your password, the link will be valid for 1 day:</p>
                            <p><a href=""{resetUrl}"">{resetUrl}</a></p>";
        }
        else
        {
            message = $@"<p>Please use the below token to reset your password with the <code>/accounts/reset-password</code> api route:</p>
                            <p><code>{account.ResetToken}</code></p>";
        }

        _emailService.Send(
            to: account.Email,
            subject: "Sign-up Verification API - Reset Password",
            html: $@"<h4>Reset Password Email</h4>
                        {message}"
        );
    }
}