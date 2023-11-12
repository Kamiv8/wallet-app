using Microsoft.AspNetCore.Identity;
using WalletApp.Application.Enums;

namespace WalletApp.Domain.Entities;

public class UserIdentity : IdentityUser<Guid>
{
    public IconType IconType { get; init; }
    public AccountData AccountData { get; init; } = default!;
    public ICollection<Token> Tokens { get; init; }
}