using MediatR;

namespace WalletApp.API.Models.commands.User;

public class ChangeUsernameCommand : IRequest<Unit>
{
    public string NewUsername { get; set; }
}