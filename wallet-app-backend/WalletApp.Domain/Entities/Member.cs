using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Member : BaseEntity
{
    public Guid UserIdentityId { get; set; }
    public virtual UserIdentity UserIdentity { get; set; } = default!;
    public Guid UserRoleIdentityId { get; set; }
    public UserRoleIdentity UserRoleIdentity { get; set; } = default!;
    public Guid GroupId { get; set; }
    public virtual Group Group { get; set; } = default!;
}
