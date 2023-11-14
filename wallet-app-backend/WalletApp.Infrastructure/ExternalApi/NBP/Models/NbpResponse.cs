using System.Text.Json.Serialization;

namespace WalletApp.Domain.Models;

public record NbpResponse(string Table, string No, string TradingDate, string EffectiveDate, List<NbpCurrency> Rates);
