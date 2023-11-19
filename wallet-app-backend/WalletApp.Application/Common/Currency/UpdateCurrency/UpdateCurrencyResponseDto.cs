using System.Text.Json.Serialization;
using WalletApp.Domain.Models;

namespace WalletApp.Application.Common.Currency.Update;

public sealed class UpdateCurrencyResponseDto
{
    [JsonPropertyName("table")]
    public string Table { get; set; }
    [JsonPropertyName("no")]
    public string No { get; set; }
    [JsonPropertyName("tradingDate")]
    public DateTime TradingDate { get; set; }
    [JsonPropertyName("effectiveDate")]
    public string EffectiveDate { get; set; }
    [JsonPropertyName("rates")]
    public List<NbpCurrency> Rates { get; set; }
}
