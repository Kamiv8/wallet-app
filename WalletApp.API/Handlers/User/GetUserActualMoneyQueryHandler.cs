using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.queries.User;
using WalletApp.API.Models.Users.Dto;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.User;

public class GetUserActualMoneyQueryHandler : IRequestHandler<GetUserActualMoneyQuery, GetActualMoneyDto>
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;
    private readonly IAuthService _authService;

    public GetUserActualMoneyQueryHandler(DataContext dataContext, IMapper mapper, IAuthService authService)
    {
        _dataContext = dataContext;
        _mapper = mapper;
        _authService = authService;
    }
    
    public Task<GetActualMoneyDto> Handle(GetUserActualMoneyQuery request, CancellationToken cancellationToken)
    {
        var userData = _dataContext.UserDatas.FirstOrDefault(x => x.UserId == _authService.User.Id);
        var currency = _dataContext.Currencies.FirstOrDefault(x => x.Id == userData.CurrencyId);
        if (userData == null || currency == null)
        {
            throw new Exception("Cannot find user data or default currency");
        }

        var mActualMoney = new GetActualMoneyDto()
        {
            ActualMoney = userData.ActualMoneyValue,
            CurrencyName = currency.Mark
        };

        return Task.FromResult(mActualMoney);
    }
}