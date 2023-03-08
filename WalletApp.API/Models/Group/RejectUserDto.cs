namespace WalletApp.API.Models;

public class RejectUserDto
{
    public Guid UserId { get; set; }
    public Guid NotificationId { get; set; }
}