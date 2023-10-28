using System.Text.Json.Serialization;

namespace WalletApp.Domain.Models;

public class NbpResponse
{
    [JsonPropertyName("table")]
    public string Table { get; set; }
    [JsonPropertyName("no")]
    public string No { get; set; }
    [JsonPropertyName("tradingDate")]
    public string TradingDate { get; set; }
    [JsonPropertyName("effectiveDate")]
    public string EffectiveDate { get; set; }
    [JsonPropertyName("rates")]
    public List<NbpCurrency> Rates { get; set; }
}