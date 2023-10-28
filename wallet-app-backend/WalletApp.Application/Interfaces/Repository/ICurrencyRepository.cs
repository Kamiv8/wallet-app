using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface ICurrencyRepository
{
    void UpdateRange(List<Currency> currencies);
    Task AddRange(List<Currency> currencies);
    Task<Currency?> GetCurrency(string code);
    Task Save(CancellationToken cancellationToken);


}