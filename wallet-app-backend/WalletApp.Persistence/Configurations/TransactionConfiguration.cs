using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Configurations;

public class TransactionConfiguration : BaseConfiguration<Transaction>, IEntityTypeConfiguration<Transaction>
{
    public void Configure(EntityTypeBuilder<Transaction> builder)
    {
        ConfigureBaseEntity(builder);
        builder.Property(t => t.Title).IsRequired().HasColumnType("varchar").HasMaxLength(50);
        builder.Property(t => t.Price).IsRequired().HasColumnType("decimal").HasPrecision(15, 2);
        builder.Property(t => t.Date).IsRequired();
        builder.Property(t => t.TextColor).IsRequired(false).HasColumnType("varchar")
            .HasMaxLength(7);
        builder.Property(t => t.BackgroundColor).IsRequired(false).HasColumnType("varchar")
            .HasMaxLength(7);
        builder.Property(t => t.IsDefault).IsRequired().HasColumnType("bit").HasDefaultValue(0);
    }
}