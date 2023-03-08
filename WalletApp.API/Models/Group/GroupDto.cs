namespace WalletApp.API.Models;

public class GroupDto
{
    public Guid Id { get; set; }
    public int Icon { get; set; }
    public int Members { get; set; }
    public string Name { get; set; }
    public string Admin { get; set; }
}