using Microsoft.AspNetCore.Identity;

namespace WalletApp.Domain.Entities;

public class RoleIdentity : IdentityRole<Guid>
{
    public ICollection<Permission> Permissions { get; set; } = default!;

}