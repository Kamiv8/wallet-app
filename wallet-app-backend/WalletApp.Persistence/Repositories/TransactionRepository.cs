using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Repositories;

public class TransactionRepository : ITransactionRepository
{
    private readonly WalletDbContext _db;

    public TransactionRepository(WalletDbContext db)
    {
        _db = db;
    }
    
    public async Task AddTransactionAsync(Transaction transaction, CancellationToken cancellationToken)
    {
        await _db.Transactions.AddAsync(transaction, cancellationToken);
    }

    public async Task SaveAsync(CancellationToken cancellationToken)
    {
        await _db.SaveChangesAsync(cancellationToken);
    }
}