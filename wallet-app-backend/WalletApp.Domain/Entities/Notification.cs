using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Notification : BaseEntity
{
    public DateTime Date { get; set; }

    public Guid UserIdentityId { get; set; }
    public virtual UserIdentity UserIdentity { get; set; } = default!;

    public Guid? GuidId { get; set; }
    public virtual Group? Group { get; set; } = default!;

    public Guid NotificationTypeId { get; set; }
    public virtual NotificationTypeDictionary NotificationType { get; set; } = default!;
}