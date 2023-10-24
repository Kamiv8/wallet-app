using WalletApp.Application.Interfaces;

namespace WalletApp.Persistence.Repositories;

public class BaseRepository
{
    
    protected readonly IWalletDbContext _db;

    protected BaseRepository(IWalletDbContext db)
    {
        _db = db;
    }
    
}