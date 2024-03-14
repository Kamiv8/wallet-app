using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;
using WalletApp.Persistence.Configurations;

namespace WalletApp.Persistance.Configurations;

public class CategoryColorsConfiguration : BaseConfiguration<CategoryColors>, IEntityTypeConfiguration<CategoryColors>
{
    public void Configure(EntityTypeBuilder<CategoryColors> builder)
    {
        ConfigureBaseEntity(builder);
        builder.Property(x => x.Color).IsRequired().HasColumnType("nvarchar").HasMaxLength(9);
    }
}