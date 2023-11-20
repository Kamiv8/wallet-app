using MediatR;
using Microsoft.AspNetCore.Identity;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;
using EntityTransaction = WalletApp.Domain.Entities.Transaction;

namespace WalletApp.Application.Common.Transaction.AddUserTransaction;

public class
    AddUserTransactionCommandHandler : IRequestHandler<AddUserTransactionCommand, ApiResult>
{
    private readonly ITransactionRepository _repository;
    private readonly UserManager<UserIdentity> _userManager;

    public AddUserTransactionCommandHandler(ITransactionRepository repository, UserManager<UserIdentity> userManager)
    {
        _repository = repository;
        _userManager = userManager;
    }

    public async Task<ApiResult> Handle(AddUserTransactionCommand request,
        CancellationToken cancellationToken)
    {
        var entityTransaction = new EntityTransaction
        {
            UserIdentityId = request.UserId!.Value,
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