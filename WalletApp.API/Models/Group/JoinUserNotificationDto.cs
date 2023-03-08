namespace WalletApp.API.Models;

public class JoinUserNotificationDto
{
    public Guid NotificationId { get; set; }
    public Guid UserId { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public int IconId { get; set; }
}