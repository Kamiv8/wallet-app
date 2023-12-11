namespace WalletApp.Application.Common.Transaction.GetTransactionDetails;

public sealed record GetTransactionDetailsResponseDto(
    Guid Id,
    string Title,
    string CategoryName,
    decimal Price,
    string CurrencyCode,
    DateTime Date,
    IDictionary<string, decimal> ChartData,
    string? Description
);