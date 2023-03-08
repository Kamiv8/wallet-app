using MediatR;

namespace WalletApp.API.Models.commands.Group;

public class FindGroupCommand : IRequest<GroupDto>
{
    public string Name { get; set; }
}