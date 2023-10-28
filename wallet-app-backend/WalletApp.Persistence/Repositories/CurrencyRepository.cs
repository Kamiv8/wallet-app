using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Repositories;

public class CurrencyRepository : ICurrencyRepository
{
    private readonly IWalletDbContext _db;

    public CurrencyRepository(IWalletDbContext db)
    {
        _db = db;
    }
    
    public void UpdateRange(List<Currency> currencies)
    {
        _db.Currencies.UpdateRange(currencies);
    }

    public async Task AddRange(List<Currency> currencies)
    {
        await _db.Currencies.AddRangeAsync(currencies);
    }

    public async Task<Currency?> GetCurrency(string code)
    {
        return await _db.Currencies.FirstOrDefaultAsync(x => x.Code == code);
    }

    public async Task Save(CancellationToken cancellationToken)
    {
        await _db.SaveChangesAsync(cancellationToken);
    }
}