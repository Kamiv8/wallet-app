using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Note : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public string? Text { get; set; }
    public bool IsDone { get; set; }
    public string? TextColor { get; set; }
    public string? BackgroundColor { get; set; }
    public Guid UserIdentityId { get; set; }
    public virtual UserIdentity UserIdentity { get; set; } = default!;
    public Guid? GroupId { get; set; }
    public virtual Group? Group { get; set; }

}