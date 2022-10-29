using MediatR;

namespace WalletApp.API.Models.commands;

public class VerifyEmailCommand: IRequest<Unit>
{
    public string Token { get; set; }
}