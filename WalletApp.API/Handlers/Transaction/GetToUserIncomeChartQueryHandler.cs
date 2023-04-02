using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore.Query;
using WalletApp.API.Helpers;
using WalletApp.API.Models.Category;
using WalletApp.API.Models.queries.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Transaction;

public class GetToUserIncomeChartQueryHandler : IRequestHandler<GetToUserIncomeChartQuery, List<ToChartModelDto>>
{
    
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public GetToUserIncomeChartQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    
    
    public Task<List<ToChartModelDto>> Handle(GetToUserIncomeChartQuery request, CancellationToken cancellationToken)
    {

       // var transactions = _dataContext.Transactions.Where(x => );

       
       
       throw new NotImplementedException();
    }
}