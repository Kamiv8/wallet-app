using Microsoft.Extensions.Options;
using WalletApp.Application.Common.Currency.UpdateCurrency;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Options.NbpApi;
using WalletApp.Domain.Common;

namespace WalletApp.Infractructure.ExternalApi.NBP;

public class NbpClient : INbpClient
{
    private readonly HttpClient _httpClient;
    private readonly NbpOptions _npbOptions;


    public NbpClient(IOptions<NbpOptions> npbOptions, HttpClient httpClient)
    {
        _httpClient = httpClient;
        _npbOptions = npbOptions.Value;
    }

    public async Task<UpdateCurrencyResponseDto> GetCurrencies(CancellationToken cancellationToken)
    {
        using var request = new HttpRequestMessage();
        request.Method = new HttpMethod("GET");
        request.RequestUri = new Uri(_npbOptions.BaseUrl + "/api/exchangerates/tables/c",
            UriKind.RelativeOrAbsolute);
        var response =
            await _httpClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead,
                cancellationToken);
        if (!response.IsSuccessStatusCode) throw new ErrorDetails("Bad request to NBP API");
        var data = await response.Content.ReadAsStringAsync(cancellationToken)
            .ConfigureAwait(false);

        return ResultSerializer.Deserialize(data)[0];
    }
}