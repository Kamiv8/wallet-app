using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface IDefaultTransactionRepository
{
    Task CreateDefaultUserRepository(DefaultTransaction defaultTransaction, CancellationToken cancellationToken);

    Task<IList<DefaultTransaction>> GetAllDefaultTransactions(Guid userId,
        CancellationToken cancellationToken);

    Task<DefaultTransaction?> GetDefaultUserTransactionById(Guid id,
        CancellationToken cancellationToken);

    void RemoveDefaultTransaction(DefaultTransaction defaultTransaction);
}