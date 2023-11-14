using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Configurations;

public class UserIdentityConfiguration : IEntityTypeConfiguration<UserIdentity>
{
    public void Configure(EntityTypeBuilder<UserIdentity> builder)
    {
        builder.HasMany(x => x.Tokens).WithOne(x => x.UserIdentity)
            .HasForeignKey(x => x.UserIdentityId);
        builder.HasOne(x => x.AccountData).WithOne(x => x.UserIdentity);
        builder.HasMany(x => x.Transactions).WithOne(x => x.UserIdentity)
            .HasForeignKey(x => x.UserIdentityId);
        builder.HasMany(x => x.Categories).WithOne(x => x.UserIdentity)
            .HasForeignKey(x => x.UserIdentityId);
        builder.HasOne(x => x.Member).WithOne(x => x.UserIdentity);
        builder.HasMany(x => x.Notes).WithOne(x => x.UserIdentity)
            .HasForeignKey(x => x.UserIdentityId);
    }
}