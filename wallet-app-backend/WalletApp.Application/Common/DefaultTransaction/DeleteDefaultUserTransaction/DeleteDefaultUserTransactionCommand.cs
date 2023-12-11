using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.DefaultTransaction.DeleteDefaultUserTransaction;

public sealed record DeleteDefaultUserTransactionCommand(Guid Id) : ICommand;