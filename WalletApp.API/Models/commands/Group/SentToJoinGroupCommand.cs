using MediatR;

namespace WalletApp.API.Models.commands.Group;

public class SentToJoinGroupCommand : IRequest<Unit>
{
    public Guid GroupId { get; set; }   
}