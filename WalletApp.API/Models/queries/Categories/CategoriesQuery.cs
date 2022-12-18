using MediatR;
using WalletApp.API.Models.Category;

namespace WalletApp.API.Models.queries.Categories;

public class CategoriesQuery : IRequest<List<DefaultCategoryDto>>
{
    
}