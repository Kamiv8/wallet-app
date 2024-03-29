namespace WalletApp.Application.Common.Transaction.AddUserTransaction;

public sealed record AddUserTransactionDto(
    string Title,
    decimal Price,
    Guid CurrencyId,
    Guid CategoryId,
    DateTime Date,
    bool IsDefault,
    string? Description,
    string? TextColor,
    string? BackgroundColor
);