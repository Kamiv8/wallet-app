using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface ITransactionRepository
{
    Task AddTransactionAsync(Transaction transaction, CancellationToken cancellationToken);
}