using System.ComponentModel.DataAnnotations.Schema;

namespace WalletApp.API.Entities;

public class Notification
{
    public Guid Id { get; set; }
    public DateTime Date { get; set; }
    [ForeignKey("NotificationTypeId")]
    public virtual NotificationType NotificationType { get; set; }
    public Guid? NotificationTypeId { get; set; }

    [ForeignKey("UserId")]
    public virtual User User { get; set; }

    public Guid UserId { get; set; }

    public virtual Group? Group { get; set; }
    public Guid? Guid { get; set; }
    
}