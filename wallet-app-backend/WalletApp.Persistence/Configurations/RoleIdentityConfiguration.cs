using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Configurations;

public class RoleIdentityConfiguration : IEntityTypeConfiguration<RoleIdentity>
{
    public void Configure(EntityTypeBuilder<RoleIdentity> builder)
    {
        builder.HasMany(x => x.Permissions).WithMany(x => x.RoleIdentities).UsingEntity<RolePermission>(
            j => j.HasOne(rp => rp.Permission).WithMany().HasForeignKey(rp => rp.PermissionId),
            j => j.HasOne(rp => rp.RoleIdentity).WithMany().HasForeignKey(rp => rp.RoleIdentityId));
    }
}