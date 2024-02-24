using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.DefaultTransaction.EditDefaultUserTransaction;

public class
    EditDefaultUserTransactionCommandHandler : ICommandHandler<EditDefaultUserTransactionCommand>
{
    private readonly IDefaultTransactionRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public EditDefaultUserTransactionCommandHandler(IDefaultTransactionRepository repository,
        IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResult> Handle(EditDefaultUserTransactionCommand request,
        CancellationToken cancellationToken)
    {
        var transaction =
            await _repository.GetDefaultUserTransactionById(request.Id, cancellationToken);

        if (transaction is null)
            return ApiResult.Error(TransactionMessages.DefaultTransactionNotFound);

        transaction.Title = request.Title;
        transaction.Price = request.Price;
        transaction.CurrencyId = request.CurrencyId;
        transaction.CategoryId = request.CategoryId;
        transaction.TextColor = request.TextColor; 
        transaction.BackgroundColor = request.BackgroundColor;
        transaction.Description = request.Description;

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return ApiResult.Success();
    }
}