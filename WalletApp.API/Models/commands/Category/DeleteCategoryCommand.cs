using MediatR;

namespace WalletApp.API.Models.commands.Category;

public class DeleteCategoryCommand : IRequest<Unit>
{
    public Guid CategoryId { get; set; }
}