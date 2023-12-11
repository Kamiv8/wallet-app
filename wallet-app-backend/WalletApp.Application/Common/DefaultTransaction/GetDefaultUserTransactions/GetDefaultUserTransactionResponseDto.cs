namespace WalletApp.Application.Common.DefaultTransaction.GetDefaultUserTransactions;

public sealed record GetDefaultUserTransactionResponseDto(
    Guid Id,
    string Title,
    string CategoryName,
    decimal Price,
    string CurrencyCode,
    string TextColor,
    string BackgroundColor,
    string? Description
);