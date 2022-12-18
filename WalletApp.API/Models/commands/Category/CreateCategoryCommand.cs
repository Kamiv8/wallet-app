using MediatR;

namespace WalletApp.API.Models.commands.Category;

public class CreateCategoryCommand : IRequest<Unit>
{
    public string Name { get; set; }
}