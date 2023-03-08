using WalletApp.API.Models.Category;
using WalletApp.API.Models.Currency;

namespace WalletApp.API.Models.Transaction;

public class GetAllTransactionDto
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public decimal Price { get; set; }
    public CurrencyDto Currency { get; set; }
    public DateTime Date { get; set; }
    public DefaultCategoryDto Category { get; set; }
    public string Description { get; set; }

    public string? TextColor { get; set; }
    public string? BackgroundColor { get; set; }
}