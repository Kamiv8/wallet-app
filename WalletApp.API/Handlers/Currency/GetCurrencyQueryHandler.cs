using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.Currency;
using WalletApp.API.Models.queries.Currency;

namespace WalletApp.API.Handlers.Currency;

public class GetCurrencyQueryHandler : IRequestHandler<GetCurrencyQuery, List<CurrencyDto>>
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;


    public GetCurrencyQueryHandler(DataContext dataContext, IMapper mapper)
    {
        _dataContext = dataContext;
        _mapper = mapper;
    }
    
    public Task<List<CurrencyDto>> Handle(GetCurrencyQuery request, CancellationToken cancellationToken)
    {
        var currencies = _dataContext.Currencies.ToList();

        var mCurrency = _mapper.Map<List<CurrencyDto>>(currencies);
        
        return Task.FromResult(mCurrency);
    }
}