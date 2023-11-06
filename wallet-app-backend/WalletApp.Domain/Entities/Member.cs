using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Member : BaseEntity
{
    public Guid AccountId { get; set; }
    public virtual Account Account { get; set; }
    public Guid RoleId { get; set; }
    public virtual RoleDictionary RoleDictionary { get; set; }
}