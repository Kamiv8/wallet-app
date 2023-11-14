using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class NotificationTypeDictionary : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public ICollection<Notification> Notifications { get; set; } = default!;
}