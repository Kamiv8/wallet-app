using System.Collections;
using Microsoft.AspNetCore.Identity;
using WalletApp.Domain.Enums;

namespace WalletApp.Domain.Entities;

public class UserIdentity : IdentityUser<Guid>
{
    public IconType IconType { get; set; }
    public AccountData AccountData { get; set; } = default!;
    public Member? Member { get; set; }
    public ICollection<Token> Tokens { get; set; } = default!;
    public ICollection<Category> Categories { get; set; } = default!;
    public ICollection<Transaction> Transactions { get; set; } = default!;
    public ICollection<DefaultTransaction> DefaultTransactions { get; set; } = default!;
    public ICollection<Note> Notes { get; set; } = default!;

}