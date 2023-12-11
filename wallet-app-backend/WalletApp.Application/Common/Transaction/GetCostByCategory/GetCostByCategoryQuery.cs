using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Transaction.GetCostByCategory;

public sealed record GetCostByCategoryQuery(Guid UserId, Guid CurrencyId) : IQuery<IEnumerable<GetCostByCategoryResponseDto>>;