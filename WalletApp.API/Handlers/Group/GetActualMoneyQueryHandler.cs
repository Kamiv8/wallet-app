using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.queries.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class GetActualMoneyQueryHandler : IRequestHandler<GetActualMoneyQuery, ActualMoneyDto>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public GetActualMoneyQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<ActualMoneyDto> Handle(GetActualMoneyQuery request, CancellationToken cancellationToken)
    {
        var group = _dataContext.Groups
            .Include(x => x.Currency)
            .FirstOrDefault(x => x.Id == _authService.User.GroupId);

        if (group == null)
        {
            throw new AppException("Cannot find group or user");
        }

        
        var res = new ActualMoneyDto()
        {
            IconId = group.Icon,
            ActualMoney = group.Money,
            GroupName = group.Name,
            CurrencyMark = group.Currency.Mark
        };

        return Task.FromResult(res);
    }
}