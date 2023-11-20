namespace WalletApp.Application.Common.Transaction.AddUserTransaction;

public sealed record AddUserTransactionCommandDto(
    string Title,
    decimal Price,
    Guid CurrencyId,
    Guid CategoryId,
    DateTime Date,
    bool IsDefault,
    string? TextColor,
    string? BackgroundColor
);