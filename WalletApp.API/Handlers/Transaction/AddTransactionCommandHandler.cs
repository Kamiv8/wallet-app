using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Transaction;
using WalletApp.API.Models.enums;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Transaction;

public class AddTransactionCommandHandler: IRequestHandler<AddTransactionCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;


    public AddTransactionCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<Unit> Handle(AddTransactionCommand command, CancellationToken cancellationToken)
    {

        var transaction = _mapper.Map<Entities.Transaction>(command);

        var userData = _dataContext.UserDatas.FirstOrDefault(x => x.UserId == _authService.User.Id);

        var user = _dataContext.Users.FirstOrDefault(x => x.Id == _authService.User.Id);

        var zl = _dataContext.Currencies.FirstOrDefault(x => x.Mark == "PLN");
        
        if (command.Type == TransactionType.Person)
        {
            if (userData.CurrencyId != transaction.CurrencyId)
            {
                if (transaction.CurrencyId == zl.Id)
                {
                    transaction.Price /= zl.ExchangeRate;
                }
                else
                {
                    var exchangeRate = _dataContext.Currencies.FirstOrDefault(x => x.Id == userData.CurrencyId)!.ExchangeRate;
                    transaction.Price *= exchangeRate;
                }


            }
            userData.ActualMoneyValue += transaction.Price;

            _dataContext.UserDatas.Update(userData);
        
        }
        else
        {
            if (user.GroupId == null)
            {
                throw new Exception("You are not part of the group");
            }
            // TODO waluts fix bug

            var group = _dataContext.Groups.FirstOrDefault(x => x.Id == user.GroupId);

            if (transaction.CurrencyId != group.CurrencyId)
            {
                if (transaction.CurrencyId == zl.Id)
                {
                    transaction.Price /= zl.ExchangeRate;
                }
                else
                {
                    var exchangeRate = _dataContext.Currencies.FirstOrDefault(x => x.Id == group.CurrencyId)!.ExchangeRate;
                    transaction.Price *= exchangeRate; 
                }

                
            }
            else
            {
                transaction.Price *= transaction.Price;
            }
            group.Money += transaction.Price;
            _dataContext.Groups.Update(group);

        }

        transaction.User = _authService.User!;
        _dataContext.Transactions.Add(transaction);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}