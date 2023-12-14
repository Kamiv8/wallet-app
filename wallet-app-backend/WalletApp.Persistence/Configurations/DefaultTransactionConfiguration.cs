using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;
using WalletApp.Persistence.Configurations;

namespace WalletApp.Persistance.Configurations;

public class DefaultTransactionConfiguration : BaseConfiguration<DefaultTransaction>,
    IEntityTypeConfiguration<DefaultTransaction>
{
    public void Configure(EntityTypeBuilder<DefaultTransaction> builder)
    {
        ConfigureBaseEntity(builder);
        builder.Property(t => t.Title).IsRequired().HasColumnType("nvarchar").HasMaxLength(50);
        builder.Property(t => t.Price).IsRequired().HasColumnType("decimal").HasPrecision(15, 2);
        builder.Property(t => t.TextColor).IsRequired(false).HasColumnType("nvarchar")
            .HasMaxLength(7);
        builder.Property(t => t.BackgroundColor).IsRequired(false).HasColumnType("nvarchar")
            .HasMaxLength(7);
        builder.Property(x => x.Description).IsRequired(false).HasColumnType("nvarchar")
            .HasMaxLength(500);
        
        builder
            .HasMany(x => x.Transactions)
            .WithOne(x => x.DefaultTransaction)
            .HasForeignKey(x => x.DefaultTransactionId)
            .IsRequired(false);
    }
}