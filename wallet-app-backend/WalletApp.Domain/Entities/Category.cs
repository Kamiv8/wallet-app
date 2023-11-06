using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Category : BaseEntity
{
    public string Name { get; set; }

    public ICollection<Transaction> Transactions { get; set; }
}