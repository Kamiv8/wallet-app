using MediatR;
using WalletApp.API.Models.enums;

namespace WalletApp.API.Models.commands.Category;

public class CreateCategoryCommand : IRequest<Unit>
{
    public string Name { get; set; }
    public TransactionType Type { get; set; }
}