using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Note : BaseEntity
{
    public string Title { get; set; }
    public string? Text { get; set; }
    public bool IsDone { get; set; }
    public string? TextColor { get; set; }
    public string? BackgroundColor { get; set; }
    public Guid AccountId { get; set; }
    public virtual Account Account { get; set; }
    
}