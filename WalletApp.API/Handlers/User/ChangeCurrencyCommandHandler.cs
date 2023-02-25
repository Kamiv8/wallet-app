using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.User;

public class ChangeCurrencyCommandHandler: IRequestHandler<ChangeCurrencyCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;

    public ChangeCurrencyCommandHandler(DataContext dataContext, IAuthService authService)
    {
        _dataContext = dataContext;
        _authService = authService;
    }
    
    public Task<Unit> Handle(ChangeCurrencyCommand request, CancellationToken cancellationToken)
    {
        var userData = _dataContext.UserDatas.FirstOrDefault(x => x.UserId == _authService.User!.Id);
        var currency = _dataContext.Currencies.FirstOrDefault(x => x.Id == userData!.CurrencyId);
        var newCurrency = _dataContext.Currencies.FirstOrDefault(x => x.Id == request.CurrencyId);
        if (userData == null || currency == null || newCurrency == null)
        {
            throw new Exception("Cannot find user data");
        }

        if (currency.Name != "PLN")
        {
            userData.ActualMoneyValue /= currency.ExchangeRate;
        }

        userData.ActualMoneyValue *= newCurrency.ExchangeRate;
            
        
        userData.CurrencyId = request.CurrencyId;

        _dataContext.UserDatas.Update(userData);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}