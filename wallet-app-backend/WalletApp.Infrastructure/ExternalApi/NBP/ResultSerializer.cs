using System.Text.Json;
using Newtonsoft.Json;
using WalletApp.Domain.Enums;
using WalletApp.Domain.Models;
using JsonConverter = System.Text.Json.Serialization.JsonConverter;

namespace WalletApp.Infrastructure.ExternalApi.NBP;

public static class ResultSerializer
{

    public static NbpResponse Deserialize(string json)
    {
        var deserializeData = JsonConvert.DeserializeObject<List<NbpResponse>>(json)[0];
        var enabledCurrencies = new[]
        {
            Enum.GetName(EnabledCurrency.EUR),
            Enum.GetName(EnabledCurrency.CHF),
            Enum.GetName(EnabledCurrency.GBP),
            Enum.GetName(EnabledCurrency.USD),
        };
        deserializeData.Rates =
            deserializeData.Rates.Where(x => enabledCurrencies.Contains(x.Code)).ToList();


        return deserializeData;
    }
    
    
}