using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using EntityTransaction = WalletApp.Domain.Entities.Transaction;

namespace WalletApp.Application.Common.Transaction.AddUserTxDefault;

public class AddUserTxDefaultCommandHandler : ICommandHandler<AddUserTxDefaultCommand>
{
    private readonly ITransactionRepository _transactionRepository;
    private readonly IDefaultTransactionRepository _defaultTransactionRepository;
    private readonly ICurrencyRepository _currencyRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IAccountDataRepository _accountDataRepository;

    public AddUserTxDefaultCommandHandler(
        ITransactionRepository transactionRepository,
        IDefaultTransactionRepository defaultTransactionRepository,
        ICurrencyRepository currencyRepository,
        IUnitOfWork unitOfWork,
        IAccountDataRepository accountDataRepository
        )
    {
        _transactionRepository = transactionRepository;
        _defaultTransactionRepository = defaultTransactionRepository;
        _currencyRepository = currencyRepository;
        _unitOfWork = unitOfWork;
        _accountDataRepository = accountDataRepository;
    }

    public async Task<ApiResult> Handle(AddUserTxDefaultCommand request,
        CancellationToken cancellationToken)
    {
        var defaultTransaction =
            await _defaultTransactionRepository.GetDefaultUserTransactionById(
                request.DefaultTransactionId, cancellationToken);

        if (defaultTransaction is null) return ApiResult.Error(); // TODO
        
        var accountData =
            await _accountDataRepository.GetUserById(request.UserId, cancellationToken);
        if (accountData is null) return ApiResult.Error(); // TODO

        
        var currency =
            await _currencyRepository.GetCurrencyById(defaultTransaction.CurrencyId, cancellationToken);
        if (currency is null) return ApiResult.Error(); // TODO
        
        if (!Enum.TryParse(currency.Code, true, out AcceptCurrency acceptCurrency))
            return ApiResult.Error(); // TODO

        switch (acceptCurrency)
        {
            case AcceptCurrency.CHF:
                accountData.ActualMoneyChf += defaultTransaction.Price;
                break;
            case AcceptCurrency.EUR:
                accountData.ActualMoneyEur += defaultTransaction.Price;
                break;
            case AcceptCurrency.GBP:
                accountData.ActualMoneyGbp += defaultTransaction.Price;
                break;
            case AcceptCurrency.USD:
                accountData.ActualMoneyUsd += defaultTransaction.Price;
                break;
            default:
                accountData.ActualMoneyPln += defaultTransaction.Price;
                break;
        }
        
        var transaction = new EntityTransaction
        {
            Title = defaultTransaction.Title,
            UserIdentityId = request.UserId,
            Price = defaultTransaction.Price,
            CategoryId = defaultTransaction.CategoryId,
            CurrencyId = defaultTransaction.CurrencyId,
            Date = DateTime.Now,
            Description = defaultTransaction.Description,
            IsDefault = false
        };

        await _transactionRepository.AddTransactionAsync(transaction, cancellationToken);

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return ApiResult.Success();
    }
}