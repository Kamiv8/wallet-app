using WalletApp.Application.Common.Currency.Update;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Common;
using WalletApp.Domain.Models;

namespace WalletApp.Infrastructure.ExternalApi.NBP;

public class NbpClient : INbpClient
{
    private readonly HttpClient _httpClient;

    private const string baseUrl = "http://api.nbp.pl/api/exchangerates/tables/c";

    public NbpClient(IHttpClientFactory factory)
    {
        _httpClient = factory.CreateClient("NBPClient");
    }


    public async Task<UpdateCurrencyResponseDto> GetCurrencies(CancellationToken cancellationToken)
    {
        using var request = new HttpRequestMessage();
        request.Method = new HttpMethod("GET");
        request.RequestUri = new Uri(baseUrl, UriKind.RelativeOrAbsolute);

        var response =
            await _httpClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead,
                cancellationToken);

        if (!response.IsSuccessStatusCode) throw new ErrorDetails("Bad request to NBP API");
        var data = await response.Content.ReadAsStringAsync(cancellationToken)
            .ConfigureAwait(false);
        var deserializerData = ResultSerializer.Deserialize(data);
        return deserializerData;
    }
}