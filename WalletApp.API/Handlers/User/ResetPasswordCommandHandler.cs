using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.User;

public class ResetPasswordCommandHandler : IRequestHandler<ResetPasswordCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IUserService _userService;

    public ResetPasswordCommandHandler(
        DataContext dataContext,
        IUserService userService
    )
    {
        _dataContext = dataContext;
        _userService = userService;
    }

    public Task<Unit> Handle(ResetPasswordCommand command, CancellationToken cancellationToken)
    {
        var account = _userService.GetAccountByResetToken(command.Token);

        if (command.Password != command.ConfirmPassword)
        {
            throw new AppException("Password and ConfirmPassword is not equal");
        }
        
        account.PasswordHash = BCrypt.Net.BCrypt.HashPassword(command.Password);
        account.PasswordReset = DateTime.Now;
        account.ResetToken = null;
        account.ResetTokenExpires = null;

        _dataContext.Users.Update(account);
        _dataContext.SaveChanges();
        
        return Task.FromResult(Unit.Value);
    }
    
}