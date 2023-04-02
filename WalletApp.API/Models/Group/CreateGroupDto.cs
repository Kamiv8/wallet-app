namespace WalletApp.API.Models;

public class 
CreateGroupDto
{
    public string Name { get; set; }
    public int MaxMembers { get; set; }
    public int Icon { get; set; }
    public Guid CurrencyId { get; set; }
}