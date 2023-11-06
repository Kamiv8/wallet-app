using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Configurations;

public class CategoryConfiguration : BaseConfiguration<Category>, IEntityTypeConfiguration<Category>
{
    
    public void Configure(EntityTypeBuilder<Category> builder)
    {
        ConfigureBaseEntity(builder);
        builder.Property(c => c.Name).IsRequired().HasColumnType("varchar").HasMaxLength(50);
    }
}