using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Transaction.AddUserTransaction;

public sealed record AddUserTransactionCommand(
    Guid UserId,
    string Title,
    decimal Price,
    Guid CurrencyId,
    Guid CategoryId,
    DateTime Date,
    bool IsDefault,
    string? Description,
    string? TextColor,
    string? BackgroundColor
) : ICommand;