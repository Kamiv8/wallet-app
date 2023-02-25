using MediatR;

namespace WalletApp.API.Models.commands.User;

public class ChangeIconCommand : IRequest<Unit>
{
    public int IconId { get; set; }
}