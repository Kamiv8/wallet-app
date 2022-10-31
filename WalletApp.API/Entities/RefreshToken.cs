using System.ComponentModel.DataAnnotations;

namespace WalletApp.API.Entities;

public class RefreshToken
{
    [Key]
    public int Id { get; set; }

    public User User { get; set; } = new User();
    public string? Token { get; set; }
    public DateTime Expires { get; set; }
    public DateTime Created { get; set; }
    public string CreatedByIp { get; set; } = "";
    public DateTime? Revoked { get; set; }
    public string RevokedByIp { get; set; } = "";
    public string ReplacedByToken { get; set; } = "";
    public string ReasonRevoked { get; set; } = "";
    public bool IsExpired => DateTime.UtcNow >= Expires;
    public bool IsRevoked => Revoked != null;
    public bool IsActive => Revoked == null && !IsExpired;
}