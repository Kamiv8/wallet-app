using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using WalletApp.API.Helpers;
using WalletApp.API.Models.Category;
using WalletApp.API.Models.queries.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Transaction;

public class GetToUserCostChartQueryHandler : IRequestHandler<GetToUserCostChartQuery,List<ToChartModelDto>>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public GetToUserCostChartQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<List<ToChartModelDto>> Handle(GetToUserCostChartQuery request, CancellationToken cancellationToken)
    {
        var transactions = _dataContext.Transactions
            .Where(x => x.GroupId == _authService.User.GroupId && x.Price < 0)
            .Include(x => x.User);


        var groupedTransactions = transactions
            .GroupBy(x => x.UserId)
            .Select(x => new ToChartModelDto()
            {
                Name = x.Select(y => y.User.Username).First(),
                Value = x.Sum(y => y.Price)
            })
            .ToList();

        return Task.FromResult(!transactions.Any() ? new List<ToChartModelDto>() : groupedTransactions);
        
    }
}