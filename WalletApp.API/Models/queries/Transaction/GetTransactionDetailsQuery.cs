using MediatR;
using WalletApp.API.Models.Transaction;

namespace WalletApp.API.Models.queries.Transaction;

public class GetTransactionDetailsQuery : IRequest<GetTransactionDetailsDto>
{
    public Guid Id { get; set; }
}