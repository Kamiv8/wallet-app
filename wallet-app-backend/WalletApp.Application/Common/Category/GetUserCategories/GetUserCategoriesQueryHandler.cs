using MediatR;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Category.GetUserCategories;

public class GetUserCategoriesQueryHandler : IRequestHandler<GetUserCategoriesQuery,
    ApiResult<List<GetUserCategoriesResponseDto>>>
{
    private readonly ICategoryRepository _categoryRepository;

    public GetUserCategoriesQueryHandler(ICategoryRepository categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }

    public async Task<ApiResult<List<GetUserCategoriesResponseDto>>> Handle(
        GetUserCategoriesQuery request, CancellationToken cancellationToken)
    {
        var categories =
            await _categoryRepository.GetUserCategoriesById(request.UserId, cancellationToken);

        var dtoList = categories.Select(category => new GetUserCategoriesResponseDto(category.Id, category.Name)).ToList();

        return ApiResult<List<GetUserCategoriesResponseDto>>.Success(dtoList);
    }
}