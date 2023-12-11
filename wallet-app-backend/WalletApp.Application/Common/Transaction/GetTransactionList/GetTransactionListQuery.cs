using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Dtos;

namespace WalletApp.Application.Common.Transaction.GetTransactionList;

public sealed record GetTransactionListQuery
    (Guid UserId, PaginationParamsDto PaginationParamsDto) : IQuery<GetTransactionListResponseDto>;