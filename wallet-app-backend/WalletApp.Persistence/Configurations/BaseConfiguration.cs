using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Common;

namespace WalletApp.Persistence.Configurations;

public class BaseConfiguration<T> where T : BaseEntity
{
    protected void ConfigureBaseEntity(EntityTypeBuilder<T> builder)
    {
        builder.HasKey(x => x.Id);
        
    }
}