using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using WalletApp.API.Models.enums;

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
    public bool IsVerified => Verified.HasValue || PasswordReset.HasValue;
    public string? ResetToken { get; set; }
    public DateTime? ResetTokenExpires { get; set; }
    public DateTime? PasswordReset { get; set; }
    public DateTime Created { get; set; }
    public DateTime? Updated { get; set; }
    public int IconId { get; set; }
    public Role? Role { get; set; }
    public Guid? GroupId { get; set; }
    public List<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
    public List<Transaction> Transactions { get; set; } = new List<Transaction>();
    public List<Report> Reports { get; set; } = new List<Report>();
    public List<Notification> Notifications { get; set; } = new List<Notification>();
    public List<Note> Notes { get; set; } = new List<Note>();
    public IEnumerable<Category> Categories { get; set; }
    public virtual UserData UserData { get; set; }
}