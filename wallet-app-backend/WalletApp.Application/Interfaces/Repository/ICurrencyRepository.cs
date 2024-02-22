using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface ICurrencyRepository
{
    void UpdateRange(List<Currency> currencies);
    Task AddRange(List<Currency> currencies);
    void RemoveRange(List<Currency> currencies);
    Task<List<Currency>> GetCurrenciesWithoutPln(CancellationToken cancellationToken);
    Task<Currency?> GetCurrencyByCode(string code);
    Task<List<Currency>> GetCurrencies(CancellationToken cancellationToken);
    Task<Currency?> GetCurrencyById(Guid id, CancellationToken cancellationToken);
    Task Save(CancellationToken cancellationToken);


}