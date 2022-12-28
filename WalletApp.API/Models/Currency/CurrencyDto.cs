namespace WalletApp.API.Models.Currency;

public class CurrencyDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public double ExchangeRate { get; set; }
}