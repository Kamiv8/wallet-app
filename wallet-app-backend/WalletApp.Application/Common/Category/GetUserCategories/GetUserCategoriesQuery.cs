using MediatR;

namespace WalletApp.Application.Common.Category.GetUserCategories;

public sealed record GetUserCategoriesQuery(Guid? UserId) : IRequest<ApiResult<List<GetUserCategoriesResponseDto>>>;
