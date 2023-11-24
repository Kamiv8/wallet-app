using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;
using EntityTransaction = WalletApp.Domain.Entities.Transaction;

namespace WalletApp.Application.Common.Transaction.AddUserTransaction;

public class
    AddUserTransactionCommandHandler : ICommandHandler<AddUserTransactionCommand>
{
    private readonly ITransactionRepository _repository;

    public AddUserTransactionCommandHandler(ITransactionRepository repository)
    {
        _repository = repository;
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
            IsDefault = request.IsDefault,
            TextColor = request.TextColor,
            BackgroundColor = request.BackgroundColor
        };

        await _repository.AddTransactionAsync(entityTransaction, cancellationToken);
        await _repository.SaveAsync(cancellationToken);

        return ApiResult.Success();
    }
}