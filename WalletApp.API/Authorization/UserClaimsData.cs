namespace WalletApp.API.Authorization;

public class UserClaimsData
{
    public Guid userId { get; set; }
    public Guid? GroupId { get; set; }
}