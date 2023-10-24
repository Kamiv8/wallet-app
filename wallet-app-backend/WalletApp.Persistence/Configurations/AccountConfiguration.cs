using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Configurations;

public class AccountConfiguration : IEntityTypeConfiguration<Account>
{
    public void Configure(EntityTypeBuilder<Account> builder)
    {
        builder.HasKey(a => a.Id);
        builder.Property(a => a.Username).IsRequired().HasColumnType("varchar").HasMaxLength(40);
        builder.Property(a => a.Email).IsRequired().HasColumnType("varchar").HasMaxLength(255).IsUnicode();
        builder.HasIndex(a => a.Email).IsUnique();
        builder.Property(a => a.PasswordHash).IsRequired().HasColumnType("varchar").HasMaxLength(255);
        builder.Property(a => a.Icon).IsRequired().HasColumnType("int").HasDefaultValue(1);
    }
}