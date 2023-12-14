using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Transaction.AddUserTxDefault;

public sealed record AddUserTxDefaultCommand(Guid UserId, Guid DefaultTransactionId) : ICommand;