using WalletApp.Application.Dtos;

namespace WalletApp.Application.Common.Transaction.GetTransactionList;

public sealed record GetTransactionListResponseDto(
    IEnumerable<TransactionResponseDto> TransactionList,
    PaginationParamsResponseDto PaginationParamsResponseDto
);