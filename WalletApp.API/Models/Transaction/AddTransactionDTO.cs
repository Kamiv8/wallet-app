using WalletApp.API.Models.enums;

namespace WalletApp.API.Models.Transaction;

public class AddTransactionDTO
{
    public string Title { get; set; }
    public decimal Price { get; set; }
    public Currencies Currency { get; set; }
    public string Category { get; set; }
    public string? TextColor { get; set; }
    public string? BackgroundColor { get; set; }
    public bool IsDefault { get; set; }
}