using MediatR;
using WalletApp.API.Models.enums;
using WalletApp.API.Models.Transaction;

namespace WalletApp.API.Models.queries.Transaction;

public class GetAllTransactionQuery : IRequest<PagingResult<GetAllTransactionDto>>
{
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public TransactionType Type { get; set; }
}