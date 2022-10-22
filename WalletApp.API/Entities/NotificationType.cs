namespace WalletApp.API.Entities;

public class NotificationType
{
    public Guid Id { get; set; }
    public string Name { get; set; }

    public virtual Notification Notification { get; set; }
}