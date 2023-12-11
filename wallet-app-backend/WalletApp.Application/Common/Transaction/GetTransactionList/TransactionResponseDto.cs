namespace WalletApp.Application.Common.Transaction.GetTransactionList;

public record TransactionResponseDto(
    Guid Id,
    string Title,
    DateTime Date,
    string CategoryName,
    decimal Price,
    string CurrencyCode,
    string? Description
);