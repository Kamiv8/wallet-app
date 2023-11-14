using Microsoft.AspNetCore.Identity;

namespace WalletApp.Domain.Entities;

public class UserRoleIdentity : IdentityUserRole<Guid>
{
    public Guid MemberId { get; set; }
    public virtual Member Member { get; set; } = default!;
}