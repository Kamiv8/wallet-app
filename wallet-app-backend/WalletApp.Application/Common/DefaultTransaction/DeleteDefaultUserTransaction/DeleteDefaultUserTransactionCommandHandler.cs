using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.DefaultTransaction.DeleteDefaultUserTransaction;

public class DeleteDefaultUserTransactionCommandHandler : ICommandHandler<DeleteDefaultUserTransactionCommand>
{
    private readonly IDefaultTransactionRepository _repository;

    public DeleteDefaultUserTransactionCommandHandler(IDefaultTransactionRepository repository)
    {
        _repository = repository;
    }
    
    public async Task<ApiResult> Handle(DeleteDefaultUserTransactionCommand request, CancellationToken cancellationToken)
    {
        var transaction = await _repository.GetDefaultUserTransactionById(request.Id, cancellationToken);

        if (transaction is null)
            return ApiResult.Error(TransactionMessages.DefaultTransactionNotFound);
        
        _repository.RemoveDefaultTransaction(transaction);

        return ApiResult.Success();
        
    }
}