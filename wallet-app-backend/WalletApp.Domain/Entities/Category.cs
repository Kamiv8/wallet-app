using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class Category : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public Guid? UserIdentityId { get; set; }
    public virtual UserIdentity? UserIdentity { get; set; }
    public Guid? GroupId { get; set; }
    public virtual Group? Group { get; set; }
}