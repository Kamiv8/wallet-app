using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Category.GetUserCategories;

public sealed record GetUserCategoriesQuery
    (Guid UserId) : IQuery<IEnumerable<GetUserCategoriesResponseDto>>;