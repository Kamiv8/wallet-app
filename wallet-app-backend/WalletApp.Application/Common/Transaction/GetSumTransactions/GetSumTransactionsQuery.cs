using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Transaction.GetSumTransactions;

public sealed record GetSumTransactionsQuery(Guid UserId, Guid CurrencyId) : IQuery<IEnumerable<GetSumTransactionsResponseDto>>;