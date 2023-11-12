namespace WalletApp.Domain.Entities;

public class Token
{
    public Guid Id { get; set; }
    public string? RefreshToken { get; set; }
    public DateTime? RefreshTokenExpiryTime { get; set; }
    public string IpAddress { get; init; } = string.Empty;
    public Guid? UserIdentityId { get; set; }
    public virtual UserIdentity UserIdentity { get; init; } = default!;
}