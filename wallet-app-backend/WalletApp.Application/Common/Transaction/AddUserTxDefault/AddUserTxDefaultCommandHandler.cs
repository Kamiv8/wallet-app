using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using EntityTransaction = WalletApp.Domain.Entities.Transaction;

namespace WalletApp.Application.Common.Transaction.AddUserTxDefault;

public class AddUserTxDefaultCommandHandler : ICommandHandler<AddUserTxDefaultCommand>
{
    private readonly ITransactionRepository _transactionRepository;
    private readonly IDefaultTransactionRepository _defaultTransactionRepository;
    private readonly IUnitOfWork _unitOfWork;

    public AddUserTxDefaultCommandHandler(ITransactionRepository transactionRepository,
        IDefaultTransactionRepository defaultTransactionRepository, IUnitOfWork unitOfWork)
    {
        _transactionRepository = transactionRepository;
        _defaultTransactionRepository = defaultTransactionRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResult> Handle(AddUserTxDefaultCommand request,
        CancellationToken cancellationToken)
    {
        var defaultTransaction =
            await _defaultTransactionRepository.GetDefaultUserTransactionById(
                request.DefaultTransactionId, cancellationToken);

        if (defaultTransaction is null) return ApiResult.Error(); // TODO

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