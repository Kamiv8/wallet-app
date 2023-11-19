using Newtonsoft.Json;
using WalletApp.Application.Common.Currency.Update;

namespace WalletApp.Infrastructure.ExternalApi.NBP;

public static class ResultSerializer
{
    public static UpdateCurrencyResponseDto Deserialize(string json)
    {

        var list = JsonConvert.DeserializeObject<List<UpdateCurrencyResponseDto>>(json)?[0];
        return list;
    }
}