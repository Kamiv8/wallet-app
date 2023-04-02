using MediatR;
using WalletApp.API.Entities;
using WalletApp.API.Models.Category;
using WalletApp.API.Models.enums;

namespace WalletApp.API.Models.queries.Categories;

public class DefaultCategoriesQuery : IRequest<List<DefaultCategoryDto>>
{
    public TransactionType Type { get; set; }
    
}