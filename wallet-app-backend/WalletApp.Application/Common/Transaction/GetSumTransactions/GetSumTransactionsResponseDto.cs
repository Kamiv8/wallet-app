namespace WalletApp.Application.Common.Transaction.GetSumTransactions;

public sealed record GetSumTransactionsResponseDto(decimal SumPrice, DateTime DateTime, string CurrencyCode);