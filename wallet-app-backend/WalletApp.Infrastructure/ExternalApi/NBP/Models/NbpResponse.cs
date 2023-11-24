using WalletApp.Domain.Common;

namespace WalletApp.Infractructure.ExternalApi.NBP.Models;

public record NbpResponse(string Table, string No, string TradingDate, string EffectiveDate, List<NbpCurrency> Rates);
