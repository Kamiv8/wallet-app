using WalletApp.Application.Common.Currency.UpdateCurrency;

namespace WalletApp.Application.Interfaces;

public interface INbpClient
{
    Task<UpdateCurrencyResponseDto> GetCurrencies(CancellationToken cancellationToken);
}