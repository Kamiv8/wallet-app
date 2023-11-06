using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Group : BaseEntity
{
    public string Name { get; set; }
    public int Icon { get; set; }
    public int MaxMembers { get; set; }
    public decimal Money { get; set; }
    
}