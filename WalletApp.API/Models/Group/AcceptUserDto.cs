namespace WalletApp.API.Models;

public class AcceptUserDto
{
    public Guid UserId { get; set; }
    public Guid NotificationId { get; set; }
}