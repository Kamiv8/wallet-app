using MediatR;
using WalletApp.API.Models.Category;
using WalletApp.API.Models.enums;

namespace WalletApp.API.Models.queries.Transaction;

public class GetToCostChartQuery : IRequest<List<ToChartModelDto>>
{
    public TransactionType Type { get; set; }
}