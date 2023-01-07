namespace WalletApp.API.Models.Transaction;

public class GetTransactionDetailsDto
{
    public string Title { get; set; }
    public string Category { get; set; }
    public decimal Price { get; set; }
    public string CurrencyMark { get; set; }
    public DateTime Date { get; set; }
    public CategoryChartData Percentage { get; set; }
}