namespace WalletApp.API.Models.Currency;

public class CurrencyDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Mark { get; set; }
    public decimal ExchangeRate { get; set; }
}