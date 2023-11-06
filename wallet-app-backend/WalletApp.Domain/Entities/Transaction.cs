using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Transaction : BaseEntity
{
    public string Title { get; set; }
    public decimal Price { get; set; }
    public DateTime Date { get; set; }
    public string? TextColor { get; set; }
    public string? BackgroundColor { get; set; }
    public bool IsDefault { get; set; }
    public Guid CategoryId { get; set; }
    public virtual Category Category { get; set; }
    public Guid CurrencyId { get; set; }
    public virtual Currency Currency { get; set; }
    public Guid AccountId { get; set; }
    public virtual Account Account { get; set; }
}