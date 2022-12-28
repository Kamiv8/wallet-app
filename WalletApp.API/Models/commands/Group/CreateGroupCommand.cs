using MediatR;

namespace WalletApp.API.Models.commands.Group;

public class CreateGroupCommand : IRequest<Unit>
{
    public string Name { get; set; }
    public int MaxMembers { get; set; }
    public int Icon { get; set; }
    public Guid CurrencyId { get; set; }
}