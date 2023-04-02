using MediatR;

namespace WalletApp.API.Models.commands.Group;

public class DeleteUserCommand : IRequest<Unit>
{
    public Guid UserId { get; set; }
}