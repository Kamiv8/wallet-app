namespace WalletApp.Application.Interfaces;

public interface INbpClient
{
    Task<string> GetCurrencies(CancellationToken cancellationToken);
}