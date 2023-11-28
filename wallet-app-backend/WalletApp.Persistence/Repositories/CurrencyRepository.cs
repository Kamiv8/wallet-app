using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistance.Repositories;

public class CurrencyRepository : ICurrencyRepository
{
    private readonly WalletDbContext _db;

    public CurrencyRepository(WalletDbContext db)
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

    public void RemoveRange(List<Currency> currencies)
    {
        _db.Currencies.RemoveRange(currencies);
    }

    public async Task<Currency?> GetCurrencyByCode(string code)
    {
        return await _db.Currencies.FirstOrDefaultAsync(x => x.Code == code);
    }

    public async Task<List<Currency>> GetCurrencies(CancellationToken cancellationToken)
    {
        return await _db.Currencies.ToListAsync(cancellationToken);
    }

    public Task<Currency?> GetCurrencyById(Guid id, CancellationToken cancellationToken)
    {
        return _db.Currencies.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
    }

    public async Task Save(CancellationToken cancellationToken)
    {
        await _db.SaveChangesAsync(cancellationToken);
    }
}