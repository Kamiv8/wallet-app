using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;
using WalletApp.Persistence.Configurations;

namespace WalletApp.Persistance.Configurations;

public class CurrencyConfiguration : BaseConfiguration<Currency>, IEntityTypeConfiguration<Currency>
{
    public void Configure(EntityTypeBuilder<Currency> builder)
    {
        ConfigureBaseEntity(builder);
        builder.Property(c => c.CurrencyName).IsRequired().HasColumnType("nvarchar").HasMaxLength(30);
        builder.Property(c => c.Code).IsRequired().HasColumnType("nvarchar").HasMaxLength(3);
        builder.Property(c => c.Bid).IsRequired().HasColumnType("decimal").HasPrecision(10,3);
        builder.Property(c => c.Ask).IsRequired().HasColumnType("decimal").HasPrecision(10,3);
        builder.Property(c => c.TradingDate).IsRequired().HasColumnType("datetime2");
    }
}