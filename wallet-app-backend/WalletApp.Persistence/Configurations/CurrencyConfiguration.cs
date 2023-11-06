using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Configurations;

public class CurrencyConfiguration : BaseConfiguration<Currency>, IEntityTypeConfiguration<Currency>
{
    public void Configure(EntityTypeBuilder<Currency> builder)
    {
        ConfigureBaseEntity(builder);
        builder.Property(c => c.CurrencyName).IsRequired().HasColumnType("varchar").HasMaxLength(30);
        builder.Property(c => c.Code).IsRequired().HasColumnType("varchar").HasMaxLength(3);
        builder.Property(c => c.Bid).IsRequired().HasColumnType("decimal").HasPrecision(10,3);
        builder.Property(c => c.Ask).IsRequired().HasColumnType("decimal").HasPrecision(10,3);
        builder.Property(c => c.TradingDate).IsRequired().HasColumnType("datetime");
    }
}