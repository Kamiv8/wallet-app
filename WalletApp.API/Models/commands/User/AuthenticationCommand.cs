using MediatR;
using WalletApp.API.Models.Users.Response;

namespace WalletApp.API.Models.commands;

public class AuthenticationCommand: IRequest<OperationResult<Authenticate>>
{
    public string Email { get; set; }

    public string Password { get; set; }

    public string? IpAddress { get; set; }
    
}