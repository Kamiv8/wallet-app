using MediatR;

namespace WalletApp.Application.Account.Register;

public class RegisterCommand : IRequest
{
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string ConfirmPassword { get; set; }
    public int Icon { get; set; }
}