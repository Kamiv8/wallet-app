using System.Text.Json;
using WalletApp.Application.Common.Currency.UpdateCurrency;

namespace WalletApp.Infractructure.ExternalApi.NBP;

public static class ResultSerializer
{
    public static List<UpdateCurrencyResponseDto> Deserialize(string json)
    {
        var options = new JsonSerializerOptions()
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        return JsonSerializer.Deserialize<List<UpdateCurrencyResponseDto>>(json, options) ??
               new List<UpdateCurrencyResponseDto>();
    }
}