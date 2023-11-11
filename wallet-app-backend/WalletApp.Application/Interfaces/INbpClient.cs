using WalletApp.Application.Common.Currency.Update;
using WalletApp.Domain.Models;

namespace WalletApp.Application.Interfaces;

public interface INbpClient
{
    Task<UpdateCurrencyResponseDto> GetCurrencies(CancellationToken cancellationToken);
}