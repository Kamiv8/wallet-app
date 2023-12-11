using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.DefaultTransaction.GetDefaultUserTransactions;

public sealed record GetDefaultUserTransactionsQuery(Guid UserId)
    : IQuery<IReadOnlyCollection<GetDefaultUserTransactionResponseDto>>;