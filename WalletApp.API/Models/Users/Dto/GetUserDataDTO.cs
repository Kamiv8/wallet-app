namespace WalletApp.API.Models.Users.Dto;

public class GetUserDataDTO
{
    public string Username { get; set; }
    public int IconId { get; set; }
    public int Role { get; set; }
    public Guid? GroupId { get; set; }
}