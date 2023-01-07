using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.Category;
using WalletApp.API.Models.queries.Transaction;
using WalletApp.API.Models.Transaction;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Transaction;

public class GetTransactionDetailsQueryHandler : IRequestHandler<GetTransactionDetailsQuery, GetTransactionDetailsDto>
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;
    private readonly IAuthService _authService;

    public GetTransactionDetailsQueryHandler(DataContext dataContext, IMapper mapper, IAuthService authService)
    {
        _dataContext = dataContext;
        _mapper = mapper;
        _authService = authService;
    }
    
    public Task<GetTransactionDetailsDto> Handle(GetTransactionDetailsQuery request, CancellationToken cancellationToken)
    {

        var transaction = _dataContext.Transactions
            .SingleOrDefault(x => x.Id == request.Id);

        if (transaction is null)
        {
            throw new Exception("Bad request");
        }

        var allCategoryTransaction = _dataContext.Transactions
            .Where(x => x.CategoryId == transaction.CategoryId && x.UserId == _authService.User.Id)
            .Where(x => x.Id != transaction.Id)
            .ToList();


        decimal transactionsPrice = 0;

        foreach (var trans in allCategoryTransaction)
        {
            transactionsPrice += trans.Price;
        }

        var all = new ToChartModelDto
        {
            Name = "All",
            Value = transactionsPrice
        };
        var transactionToChart = new ToChartModelDto
        {
            Name = "This transaction",
            Value = transaction.Price
        };
        var procentageList = new List<ToChartModelDto>();
        procentageList.Add(all);
        procentageList.Add(transactionToChart);


        var result = new GetTransactionDetailsDto()
        {
            Title = transaction.Title,
            Category = _dataContext.Categories.FirstOrDefault(x => x.Id == transaction.CategoryId)!.Name,
            Price = transaction.Price,
            CurrencyMark = _dataContext.Currencies.FirstOrDefault(x => x.Id == transaction.CurrencyId)!.Mark,
            Date = transaction.Date
        };
        result.Percentage = new CategoryChartData
        {
            ByCategory = procentageList
        };
        
        return Task.FromResult(result);
    }
}