using MediatR;
using WalletApp.API.Models.enums;
using WalletApp.API.Models.Transaction;

namespace WalletApp.API.Models.queries.Transaction;

public class GetAllDefaultTransactionsQuery :  IRequest<List<GetAllTransactionDto>>
{
    public TransactionType Type { get; set; }   
}