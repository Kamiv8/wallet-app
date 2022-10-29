using MediatR;

namespace WalletApp.API.Models.commands.User;

public class RegisterCommand: IRequest<Unit>
{
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string ConfirmPassword { get; set; }
    public int IconId { get; set; }
    public bool AcceptTerms { get; set; }
    public string Origin { get; set; }
}