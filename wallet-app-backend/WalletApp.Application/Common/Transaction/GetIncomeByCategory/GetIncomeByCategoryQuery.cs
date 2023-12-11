using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Transaction.GetIncomeByCategory;

public sealed record GetIncomeByCategoryQuery(Guid UserId, Guid CurrencyId) : IQuery<IEnumerable<GetIncomeByCategoryResponseDto>>;