using MediatR;

namespace WalletApp.API.Models.queries.Group;

public class ChangeGroupNameCommand : IRequest<Unit>
{
    public string GroupName { get; set; }
}