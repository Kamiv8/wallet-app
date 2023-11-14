using Refit;
using WalletApp.Domain.Models;

namespace WalletApp.Infrastructure.ExternalApi.NBP;

public interface INbpApi
{

    [Get("/api/exchangerates/tables/c")]
    Task<NbpResponse> GetCurrencies();

}