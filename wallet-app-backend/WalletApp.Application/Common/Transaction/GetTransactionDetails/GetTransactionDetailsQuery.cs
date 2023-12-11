using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Transaction.GetTransactionDetails;

public sealed record GetTransactionDetailsQuery(Guid UserId, Guid TransactionId) : IQuery<GetTransactionDetailsResponseDto>;