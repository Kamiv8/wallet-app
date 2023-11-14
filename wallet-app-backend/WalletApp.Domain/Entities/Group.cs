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
    public Collection<Member> Members { get; set; } = default!;
    public Collection<Transaction> Transactions { get; set; } = default!;
    public Collection<Category> Categories { get; set; } = default!;
    public Collection<Note> Notes { get; set; } = default!;
    public Collection<Notification> Notifications { get; set; } = default!;
}