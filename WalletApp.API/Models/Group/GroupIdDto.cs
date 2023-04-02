using WalletApp.API.Models.enums;

namespace WalletApp.API.Models;

public class GroupIdDto
{
    public Guid GroupId { get; set; }
    public Role UserRole { get; set; }
}