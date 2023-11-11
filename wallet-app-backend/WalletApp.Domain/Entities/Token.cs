namespace WalletApp.Domain.Entities;

public class Token
{
    public Guid Id { get; set; }
    public string? JWTToken { get; set; }
    public string? RefreshToken { get; set; }
    public DateTime? RefreshTokenExpiryTime { get; set; }
    public Guid? AccountId { get; set; }
    public virtual Account Account { get; set; } = default!;
}