using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;
using WalletApp.Persistence.Configurations;

namespace WalletApp.Persistance.Configurations;

public class CategoryConfiguration : BaseConfiguration<Category>, IEntityTypeConfiguration<Category>
{
    
    public void Configure(EntityTypeBuilder<Category> builder)
    {
        ConfigureBaseEntity(builder);
        builder.Property(c => c.Name).IsRequired().HasColumnType("nvarchar").HasMaxLength(50);
    }
}