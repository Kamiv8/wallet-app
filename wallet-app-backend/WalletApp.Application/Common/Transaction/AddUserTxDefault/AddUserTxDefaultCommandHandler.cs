using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using EntityTransaction = WalletApp.Domain.Entities.Transaction;

namespace WalletApp.Application.Common.Transaction.AddUserTxDefault;

public class AddUserTxDefaultCommandHandler : ICommandHandler<AddUserTxDefaultCommand>
{
    private readonly ITransactionRepository _transactionRepository;
    private readonly IDefaultTransactionRepository _defaultTransactionRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IDate _date;

    public AddUserTxDefaultCommandHandler(
        ITransactionRepository transactionRepository,
        IDefaultTransactionRepository defaultTransactionRepository,
        IUnitOfWork unitOfWork,
        IDate date
    )
    {
        _transactionRepository = transactionRepository;
        _defaultTransactionRepository = defaultTransactionRepository;
        _unitOfWork = unitOfWork;
        _date = date;
    }

    public async Task<ApiResult> Handle(AddUserTxDefaultCommand request,
        CancellationToken cancellationToken)
    {
        var defaultTransaction =
            await _defaultTransactionRepository.GetDefaultTransactionToAddUserTxDefault(
                request.DefaultTransactionId, cancellationToken);
        if (defaultTransaction is null) return ApiResult.Error(CommonErrorMessages.CommonError);
        
        if (!Enum.TryParse(defaultTransaction.Currency.Code, true, out AcceptCurrency acceptCurrency))
            return ApiResult.Error(CommonErrorMessages.CommonError);

        switch (acceptCurrency)
        {
            case AcceptCurrency.CHF:
                defaultTransaction.UserIdentity.AccountData.ActualMoneyChf += defaultTransaction.Price;
                break;
            case AcceptCurrency.EUR:
                defaultTransaction.UserIdentity.AccountData.ActualMoneyEur += defaultTransaction.Price;
                break;
            case AcceptCurrency.GBP:
                defaultTransaction.UserIdentity.AccountData.ActualMoneyGbp += defaultTransaction.Price;
                break;
            case AcceptCurrency.USD:
                defaultTransaction.UserIdentity.AccountData.ActualMoneyUsd += defaultTransaction.Price;
                break;
            default:
                defaultTransaction.UserIdentity.AccountData.ActualMoneyPln += defaultTransaction.Price;
                break;
        }

        var transaction = new EntityTransaction
        {
            Title = defaultTransaction.Title,
            UserIdentityId = request.UserId,
            Price = defaultTransaction.Price,
            CategoryId = defaultTransaction.CategoryId,
            CurrencyId = defaultTransaction.CurrencyId,
            Date = _date.Now(),
            Description = defaultTransaction.Description,
            IsDefault = false
        };

        await _transactionRepository.AddTransactionAsync(transaction, cancellationToken);

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return ApiResult.Success();
    }
}