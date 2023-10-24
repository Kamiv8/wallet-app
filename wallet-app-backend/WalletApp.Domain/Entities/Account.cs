using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Account : BaseEntity
{
    public string Username { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public int Icon { get; set; }
    public Token? Token { get; set; }
}