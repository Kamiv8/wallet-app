using WalletApp.API.Models.Category;
using WalletApp.API.Models.Currency;

namespace WalletApp.API.Models.Transaction;

public class GetTransactionDetailsDto
{
    public string Title { get; set; }
    public  DefaultCategoryDto Category { get; set; }
    public decimal Price { get; set; }
    public CurrencyDto Currency { get; set; }
    public DateTime Date { get; set; }
    public CategoryChartData Percentage { get; set; }
}