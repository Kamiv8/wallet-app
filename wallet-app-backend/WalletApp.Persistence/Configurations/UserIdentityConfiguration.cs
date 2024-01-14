using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;
using WalletApp.Domain.Enums;

namespace WalletApp.Persistance.Configurations;

public class UserIdentityConfiguration : IEntityTypeConfiguration<UserIdentity>
{
    public void Configure(EntityTypeBuilder<UserIdentity> builder)
    {
        builder.Property(x => x.IconType).HasConversion<uint>();
        builder.Property(x => x.Language).HasConversion<uint>().HasDefaultValue(Language.ENGLISH);
        builder.HasMany(x => x.Tokens).WithOne(x => x.UserIdentity)
            .HasForeignKey(x => x.UserIdentityId);
        builder.HasOne(x => x.AccountData).WithOne(x => x.UserIdentity);
        builder.HasMany(x => x.Transactions).WithOne(x => x.UserIdentity)
            .HasForeignKey(x => x.UserIdentityId);
        builder.HasMany(x => x.DefaultTransactions).WithOne(x => x.UserIdentity)
            .HasForeignKey(x => x.UserIdentityId);
        builder.HasMany(x => x.Categories).WithOne(x => x.UserIdentity)
            .HasForeignKey(x => x.UserIdentityId);
        builder.HasOne(x => x.Member).WithOne(x => x.UserIdentity);
        builder.HasMany(x => x.Notes).WithOne(x => x.UserIdentity)
            .HasForeignKey(x => x.UserIdentityId);
    }
}