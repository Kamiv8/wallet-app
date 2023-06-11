namespace WalletApp.API.Models;

public class GroupDataDto
{
    public Guid Id { get; set; }
    public int IconId { get; set; }
    public string GroupName { get; set; }
    public List<string> Admins { get; set; } = new List<string>();
    public int MembersCount { get; set; }
    public int MaxMembers { get; set; }
}