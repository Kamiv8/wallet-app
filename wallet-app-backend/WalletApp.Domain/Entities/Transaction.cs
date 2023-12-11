using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Transaction : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public DateTime Date { get; set; }
    public string? Description { get; set; }
    public bool IsDefault { get; set; }
    public Guid DefaultTransactionId { get; set; }
    public virtual DefaultTransaction DefaultTransaction { get; set; } = default!;
    public Guid UserIdentityId { get; set; }
    public virtual UserIdentity UserIdentity { get; set; } = default!;
    public Guid CategoryId { get; set; }
    public virtual Category Category { get; set; } = default!;
    public Guid CurrencyId { get; set; }
    public virtual Currency Currency { get; set; } = default!;
    public Guid? GroupId { get; set; }
    public virtual Group Group { get; set; } = default!;
}