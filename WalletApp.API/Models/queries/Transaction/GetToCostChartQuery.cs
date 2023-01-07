using MediatR;
using WalletApp.API.Models.Category;

namespace WalletApp.API.Models.queries.Transaction;

public class GetToCostChartQuery : IRequest<List<ToChartModelDto>>
{
    
}