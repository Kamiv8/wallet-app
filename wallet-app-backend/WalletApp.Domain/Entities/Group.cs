using System.Collections;
using System.Collections.ObjectModel;
using WalletApp.Domain.Common;
using WalletApp.Domain.Enums;

namespace WalletApp.Domain.Entities;

public class Group : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public GroupIconType IconType { get; set; }
    public int MaxMembers { get; set; }
    public decimal Money { get; set; }
    public ICollection<Member> Members { get; set; } = default!;
    public ICollection<Transaction> Transactions { get; set; } = default!;
    public ICollection<DefaultTransaction> DefaultTransactions { get; set; } = default!;
    public ICollection<Category> Categories { get; set; } = default!;
    public ICollection<Note> Notes { get; set; } = default!;
    public ICollection<Notification> Notifications { get; set; } = default!;
}