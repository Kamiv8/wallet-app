using Microsoft.Extensions.Options;
using Refit;
using WalletApp.Application.Common.Currency.Update;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Options.NbpApi;
using WalletApp.Domain.Common;

namespace WalletApp.Infrastructure.ExternalApi.NBP;

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

        var nbpApi = RestService.For<INbpApi>(_npbOptions.BaseUrl);

        var currencies = await nbpApi.GetCurrencies();
        
        
        
        
        using var request = new HttpRequestMessage();
        request.Method = new HttpMethod("GET");
        request.RequestUri = new Uri("", UriKind.RelativeOrAbsolute);

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