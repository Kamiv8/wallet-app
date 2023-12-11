namespace WalletApp.Application.Common.DefaultTransaction.EditDefaultUserTransaction;

public sealed record EditDefaultUserTransactionDto(
    Guid Id,
    string Title,
    decimal Price,
    Guid CurrencyId,
    Guid CategoryId,
    string TextColor,
    string BackgroundColor,
    string Description
);