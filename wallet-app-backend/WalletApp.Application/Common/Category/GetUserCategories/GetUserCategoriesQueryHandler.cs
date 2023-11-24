using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Category.GetUserCategories;

public class GetUserCategoriesQueryHandler : IQueryHandler<GetUserCategoriesQuery,
    IEnumerable<GetUserCategoriesResponseDto>>
{
    private readonly ICategoryRepository _categoryRepository;

    public GetUserCategoriesQueryHandler(ICategoryRepository categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }

    public async Task<ApiResult<IEnumerable<GetUserCategoriesResponseDto>>> Handle(
        GetUserCategoriesQuery request, CancellationToken cancellationToken)
    {
        var categories =
            await _categoryRepository.GetUserCategoriesById(request.UserId, cancellationToken);

        var dtoList = categories
            .Select(category => new GetUserCategoriesResponseDto(category.Id, category.Name))
            .ToList();

        return ApiResult<IEnumerable<GetUserCategoriesResponseDto>>.Success(dtoList);
    }
}