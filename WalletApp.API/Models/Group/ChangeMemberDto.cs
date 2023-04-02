using WalletApp.API.Models.enums;

namespace WalletApp.API.Models;

public class ChangeMemberDto
{
    public Guid UserId { get; set; }
    public Role Role { get; set; }
}