using MediatR;
using WalletApp.API.Models.Category;

namespace WalletApp.API.Models.queries.Transaction;

public class GetToIncomeChartQuery : IRequest<List<ToChartModelDto>>
{
    
}