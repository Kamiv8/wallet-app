using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistance.Repositories;

public class DefaultTransactionRepository : IDefaultTransactionRepository
{
    private readonly WalletDbContext _db;

    public DefaultTransactionRepository(WalletDbContext db)
    {
        _db = db;
    }

    public async Task CreateDefaultUserRepository(DefaultTransaction defaultTransaction,
        CancellationToken cancellationToken)
    {
        await _db.DefaultTransactions.AddAsync(defaultTransaction, cancellationToken);
    }

    public async Task<IList<DefaultTransaction>> GetAllDefaultTransactions(Guid userId,
        CancellationToken cancellationToken)
    {
        return await _db.DefaultTransactions
            .Include(x => x.Category)
            .Include(x => x.Currency)
            .Where(x => x.UserIdentityId == userId)
            .ToListAsync(cancellationToken);
    }

    public async Task<DefaultTransaction?> GetDefaultUserTransactionById(Guid id,
        CancellationToken cancellationToken)
    {
        return await _db.DefaultTransactions
            .FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
    }

    public void RemoveDefaultTransaction(DefaultTransaction defaultTransaction)
    {
        _db.DefaultTransactions.Remove(defaultTransaction);
    }

    public async Task<DefaultTransaction?> GetDefaultTransactionToAddUserTxDefault(Guid dTransactionId, CancellationToken cancellationToken)
    {
        return await _db.DefaultTransactions
            .Include(x => x.UserIdentity)
            .ThenInclude(u => u.DefaultTransactions)
            .Include(x => x.Currency)
            .Where(x => x.Id == dTransactionId)
            .FirstOrDefaultAsync(cancellationToken);
    }
}