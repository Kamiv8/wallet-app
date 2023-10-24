using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Repositories;

public class AccountRepository : IAccountRepository
{
    private readonly IWalletDbContext _db;

    public AccountRepository(IWalletDbContext db)
    {
        _db = db;
    }
    
    public async Task<ICollection<Account>> GetAll()
    {
        throw new NotImplementedException();
    }

    public async Task<Account> GetAccountById(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task<Account?> GetAccountByEmail(string email)
    {
        return await _db.Accounts.SingleOrDefaultAsync(a => a.Email == email);
    }

    public async Task CreateAccount(Account account)
    {
        await _db.Accounts.AddAsync(account);
    }

    public void UpdateAccount(Account account)
    {
        _db.Accounts.Update(account);
    }

    public async Task RemoveAccount(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task Save(CancellationToken cancellationToken)
    {
        await _db.SaveChangesAsync(cancellationToken);
    }
}