namespace WalletApp.Domain.Entities;

public class RolePermission
{
    public Guid RoleIdentityId { get; set; }
    public virtual RoleIdentity RoleIdentity { get; set; } = default!;
    public Guid PermissionId { get; set; }
    public virtual Permission Permission { get; set; } = default!;
}