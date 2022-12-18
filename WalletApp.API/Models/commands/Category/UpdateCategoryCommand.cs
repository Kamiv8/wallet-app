using MediatR;

namespace WalletApp.API.Models.commands.Category;

public class UpdateCategoryCommand : IRequest<Unit>
{
    public Guid CategoryId { get; set; }
}