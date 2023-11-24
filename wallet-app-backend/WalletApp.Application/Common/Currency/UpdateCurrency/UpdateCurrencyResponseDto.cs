using WalletApp.Domain.Common;

namespace WalletApp.Application.Common.Currency.UpdateCurrency;

public sealed record UpdateCurrencyResponseDto(string Table, string No, DateTime TradingDate,
    string EffectiveDate, List<NbpCurrency> Rates);