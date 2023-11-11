using System.Text.Json.Serialization;

namespace WalletApp.Domain.Models;

public class NbpCurrency
{
    [JsonPropertyName("currency")]
    public string Currency { get; set; }
    [JsonPropertyName("code")]
    public string Code { get; set; }
    [JsonPropertyName("bid")]
    public decimal Bid { get; set; }
    [JsonPropertyName("ask")]
    public decimal Ask { get; set; }
}