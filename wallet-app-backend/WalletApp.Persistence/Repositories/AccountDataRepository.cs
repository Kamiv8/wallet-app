using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistance.Repositories;

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

    public async Task<AccountData?> GetUserById(Guid userId, CancellationToken cancellationToken)
    {
        return await _db.AccountData.FirstOrDefaultAsync(x => x.UserIdentityId == userId, cancellationToken);
    }
}