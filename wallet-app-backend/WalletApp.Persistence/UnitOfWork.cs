using WalletApp.Application.Interfaces;

namespace WalletApp.Persistance;

public class UnitOfWork : IUnitOfWork
{
    private readonly WalletDbContext _db;

    public UnitOfWork(WalletDbContext db)
    {
        _db = db;
    }
    
    public async Task SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        await _db.SaveChangesAsync(cancellationToken);
    }
}