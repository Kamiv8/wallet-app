using MediatR;

namespace WalletApp.API.Models.commands.User;

public class ForgotPasswordCommand : IRequest<Unit>
{
    public string Email { get; set; }
}