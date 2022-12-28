using System.ComponentModel.DataAnnotations.Schema;
using WalletApp.API.Models.enums;

namespace WalletApp.API.Entities;

public class Transaction
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    [Column(TypeName = "decimal(15,2)")]
    public decimal Price { get; set; }
    public DateTime Date { get; set; }
    public string? TextColor { get; set; }
    public string? BackgroundColor { get; set; }
    public bool IsDefault { get; set; }
    public virtual Category Category { get; set; }
    public Guid? CategoryId { get; set; }
    public virtual Currency Currency { get; set; }
    public Guid? CurrencyId { get; set; }
    public virtual User User { get; set; }

    public TransactionType Type { get; set; }

}