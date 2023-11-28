using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;
using WalletApp.Persistence.Configurations;

namespace WalletApp.Persistance.Configurations;

public class AccountDataConfiguration : BaseConfiguration<AccountData>,
    IEntityTypeConfiguration<AccountData>
{
    public void Configure(EntityTypeBuilder<AccountData> builder)
    {
        ConfigureBaseEntity(builder);
        builder.Property(a => a.ActualMoneyPln).IsRequired().HasDefaultValue(0)
            .HasColumnType("decimal").HasPrecision(15, 2);

        builder.Property(a => a.ActualMoneyUsd).IsRequired().HasDefaultValue(0)
            .HasColumnType("decimal").HasPrecision(15, 2);

        builder.Property(a => a.ActualMoneyChf).IsRequired().HasDefaultValue(0)
            .HasColumnType("decimal").HasPrecision(15, 2);

        builder.Property(a => a.ActualMoneyEur).IsRequired().HasDefaultValue(0)
            .HasColumnType("decimal").HasPrecision(15, 2);

        builder.Property(a => a.ActualMoneyGbp).IsRequired().HasDefaultValue(0)
            .HasColumnType("decimal").HasPrecision(15, 2);
    }
}