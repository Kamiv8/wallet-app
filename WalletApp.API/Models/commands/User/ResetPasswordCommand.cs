using MediatR;

namespace WalletApp.API.Models.commands.User;

public class ResetPasswordCommand : IRequest<Unit>
{
    public string Token { get; set; }
    public string Password { get; set; }
    public string ConfirmPassword { get; set; }
}