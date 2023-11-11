using Newtonsoft.Json;
using WalletApp.Application.Common.Currency.Update;

namespace WalletApp.Infrastructure.ExternalApi.NBP;

public static class ResultSerializer
{
    public static UpdateCurrencyResponseDto Deserialize(string json)
    {
        return JsonConvert.DeserializeObject<List<UpdateCurrencyResponseDto>>(json)?[0];
    }
}