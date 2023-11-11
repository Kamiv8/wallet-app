using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Common;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Repositories;

public class AccountDataRepository : IAccountDataRepository
{
    private readonly IWalletDbContext _db;

    public AccountDataRepository(IWalletDbContext db)
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
