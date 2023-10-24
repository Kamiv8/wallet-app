using MediatR;

namespace WalletApp.Application.Account.Authenticate;

public class AuthenticateCommand : IRequest<AuthenticateDto>
{
    public string Email { get; set; }
    public string Password { get; set; }
}