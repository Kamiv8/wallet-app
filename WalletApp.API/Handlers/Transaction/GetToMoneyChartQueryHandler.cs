using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.enums;
using WalletApp.API.Models.queries.Transaction;
using WalletApp.API.Models.Transaction;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Transaction;

public class GetToMoneyChartQueryHandler : IRequestHandler<GetToMoneyChartQuery, List<ToMoenyChartDto>>
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;
    private readonly IAuthService _authService;

    public GetToMoneyChartQueryHandler(DataContext dataContext, IMapper mapper, IAuthService authService)
    {
        _dataContext = dataContext;
        _mapper = mapper;
        _authService = authService;
    }
    
    public Task<List<ToMoenyChartDto>> Handle(GetToMoneyChartQuery request, CancellationToken cancellationToken)
    {
        List<Entities.Transaction> transactions = new List<Entities.Transaction>();

        if (request.Type == TransactionType.Person)
        {
            transactions = _dataContext.Transactions
                .Where(x => x.UserId == _authService.User.Id && x.GroupId == null)
                .ToList();
        }

        if (request.Type == TransactionType.Group)
        {
            transactions = _dataContext.Transactions
                .Where(x => x.GroupId == _authService.User.GroupId)
                .ToList();
        }

        var helperArray = new List<ToMoenyChartDto>();
        var actPrice = (decimal)0;
        foreach (var item in transactions)
        {
            actPrice += item.Price;
            var toChart = new ToMoenyChartDto
            {
                Name = item.Date,
                Value = actPrice
            };
            helperArray.Add(toChart);
        }

        var result = helperArray;

        if (helperArray.Count > 7)
        {
            result = helperArray.Skip(helperArray.Count - 7).ToList();
        }

        return Task.FromResult(result);
    }
    
}