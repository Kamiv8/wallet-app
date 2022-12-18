using MediatR;
using WalletApp.API.Entities;
using WalletApp.API.Models.Category;

namespace WalletApp.API.Models.queries.Categories;

public class DefaultCategoriesQuery : IRequest<List<DefaultCategoryDto>>
{
    
}