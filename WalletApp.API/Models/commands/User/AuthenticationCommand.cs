using MediatR;

namespace WalletApp.API.Models.commands;

public class AuthenticationCommand: IRequest<OperationResult<string>>
{
    public string Email { get; set; }

    public string Password { get; set; }

    public string? IpAddress { get; set; }
    
}