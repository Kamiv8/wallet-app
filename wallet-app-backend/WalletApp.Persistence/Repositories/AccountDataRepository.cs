using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Common;
using WalletApp.Domain.Entities;
using WalletApp.Persistance;

namespace WalletApp.Persistence.Repositories;

public class AccountDataRepository : IAccountDataRepository
{
    private readonly WalletDbContext _db;

    public AccountDataRepository(WalletDbContext db)
    {
        _db = db;
    }


    public async Task CreateAsync(AccountData accountData)
    {
        await _db.AccountData.AddAsync(accountData);
    }
    
    public async Task Save(CancellationToken cancellationToken)
    {
        await _db.SaveChangesAsync(cancellationToken);
    }
}
