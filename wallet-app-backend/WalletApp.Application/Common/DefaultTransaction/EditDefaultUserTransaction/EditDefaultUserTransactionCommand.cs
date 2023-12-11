using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.DefaultTransaction.EditDefaultUserTransaction;

public sealed record EditDefaultUserTransactionCommand(
    Guid Id,
    string Title,
    decimal Price,
    Guid CurrencyId,
    Guid CategoryId,
    string TextColor,
    string BackgroundColor,
    string Description
) : ICommand;