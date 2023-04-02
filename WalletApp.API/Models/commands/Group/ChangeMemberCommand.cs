using MediatR;
using WalletApp.API.Models.enums;

namespace WalletApp.API.Models.commands.Group;

public class ChangeMemberCommand : IRequest<Unit>
{
    public Guid UserId { get; set; }
    public Role Role { get; set; }
}