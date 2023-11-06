using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface ICurrencyRepository
{
    void UpdateRange(List<Currency> currencies);
    Task AddRange(List<Currency> currencies);
    Task<Currency?> GetCurrencyByCode(string code);
    Task<IEnumerable<Currency>> GetCurrencies();
    Task<Currency?> GetCurrencyById(Guid id);
    Task Save(CancellationToken cancellationToken);


}