namespace WalletApp.Domain.Entities;

public class Permission
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public ICollection<RoleIdentity> RoleIdentities { get; set; } = default!;
}