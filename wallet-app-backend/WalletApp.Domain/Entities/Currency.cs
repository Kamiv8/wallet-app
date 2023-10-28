namespace WalletApp.Domain.Entities;

public class Currency
{
    public Guid Id { get; set; }
    public string CurrencyName { get; set; }
    public string Code { get; set; }
    public decimal Bid { get; set; }
    public decimal Ask { get; set; }
    public DateTime TradingDate { get; set; }
}