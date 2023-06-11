using MediatR;

namespace WalletApp.API.Models.commands.Group;

public class ChangeIconCommand : IRequest<Unit>
{
    public int IconId { get; set; }
}