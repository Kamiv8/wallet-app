using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using EntityTransaction = WalletApp.Domain.Entities.Transaction;
using EntityDefaultTransaction = WalletApp.Domain.Entities.DefaultTransaction;

namespace WalletApp.Application.Common.Transaction.AddUserTransaction;

public class
    AddUserTransactionCommandHandler : ICommandHandler<AddUserTransactionCommand>
{
    private readonly ITransactionRepository _repository;
    private readonly ICurrencyRepository _currencyRepository;
    private readonly IAccountDataRepository _accountDataRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IDefaultTransactionRepository _defaultTransactionRepository;

    public AddUserTransactionCommandHandler(
        ITransactionRepository repository,
        ICurrencyRepository currencyRepository,
        IAccountDataRepository accountDataRepository,
        IUnitOfWork unitOfWork,
        IDefaultTransactionRepository defaultTransactionRepository
    )
    {
        _repository = repository;
        _currencyRepository = currencyRepository;
        _accountDataRepository = accountDataRepository;
        _unitOfWork = unitOfWork;
        _defaultTransactionRepository = defaultTransactionRepository;
    }

    public async Task<ApiResult> Handle(AddUserTransactionCommand request,
        CancellationToken cancellationToken)
    {
        var entityTransaction = new EntityTransaction
        {
            UserIdentityId = request.UserId,
            Title = request.Title,
            Price = request.Price,
            CategoryId = request.CategoryId,
            CurrencyId = request.CurrencyId,
            Date = request.Date,
            Description = request.Description,
            IsDefault = request.IsDefault
        };

        var currency =
            await _currencyRepository.GetCurrencyById(request.CurrencyId, cancellationToken);
        if (currency is null) return ApiResult.Error(); // TODO

        var accountData =
            await _accountDataRepository.GetUserById(request.UserId, cancellationToken);
        if (accountData is null) return ApiResult.Error(); // TODO

        if (!Enum.TryParse(currency.Code, true, out AcceptCurrency acceptCurrency))
            return ApiResult.Error(); // TODO

        switch (acceptCurrency)
        {
            case AcceptCurrency.CHF:
                accountData.ActualMoneyChf = request.Price;
                break;
            case AcceptCurrency.EUR:
                accountData.ActualMoneyEur = request.Price;
                break;
            case AcceptCurrency.GBP:
                accountData.ActualMoneyGbp = request.Price;
                break;
            case AcceptCurrency.USD:
                accountData.ActualMoneyUsd = request.Price;
                break;
            default:
                accountData.ActualMoneyPln = request.Price;
                break;
        }

        if (request.IsDefault)
        {
            var defaultTransaction = new EntityDefaultTransaction
            {
                UserIdentityId = request.UserId,
                Title = request.Title,
                Price = request.Price,
                CategoryId = request.CategoryId,
                CurrencyId = request.CurrencyId,
                Date = request.Date,
                Description = request.Description,
                BackgroundColor = request.BackgroundColor,
                TextColor = request.TextColor
            };
            await _defaultTransactionRepository.CreateDefaultUserRepository(defaultTransaction,
                cancellationToken);
        }


        await _repository.AddTransactionAsync(entityTransaction, cancellationToken);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return ApiResult.Success();
    }
}