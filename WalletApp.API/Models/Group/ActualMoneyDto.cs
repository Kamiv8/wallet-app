namespace WalletApp.API.Models;

public class ActualMoneyDto
{
    public int IconId { get; set; }
    public string GroupName { get; set; }
    public decimal ActualMoney { get; set; }
    public string CurrencyMark { get; set; }
}