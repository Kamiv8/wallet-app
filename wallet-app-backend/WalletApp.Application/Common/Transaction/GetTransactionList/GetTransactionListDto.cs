using WalletApp.Application.Dtos;

namespace WalletApp.Application.Common.Transaction.GetTransactionList;

public sealed record GetTransactionListDto(PaginationParamsDto PaginationParamsDto);