using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Currency : BaseEntity
{
    public string CurrencyName { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public decimal Bid { get; set; }
    public decimal Ask { get; set; }
    public DateTime TradingDate { get; set; }
    public ICollection<Transaction> Transactions { get; set; } = default!;
}