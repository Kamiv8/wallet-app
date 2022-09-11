using System.Diagnostics.CodeAnalysis;

namespace WalletApp.API.Entities;

public class User
{
    public Guid Id { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public bool AcceptTerms { get; set; }
    public string? VerificationToken { get; set; }
    public DateTime? Verified { get; set; }
    public bool isVerified => Verified.HasValue || PasswordReset.HasValue;
    public string? ResetToken { get; set; }
    public DateTime? ResetTokenExpires { get; set; }
    public DateTime? PasswordReset { get; set; }
    public DateTime Created { get; set; }
    public DateTime? Updated { get; set; }
    public int IconId { get; set; }

    public List<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
}