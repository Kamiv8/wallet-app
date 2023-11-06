using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Configurations;

public class AccountDataConfiguration : BaseConfiguration<AccountData>, IEntityTypeConfiguration<AccountData>
{
    public void Configure(EntityTypeBuilder<AccountData> builder)
    {
        ConfigureBaseEntity(builder);
        builder.Property(a => a.ActualMoney).IsRequired().HasDefaultValue(0)
            .HasColumnType("decimal").HasPrecision(15, 2);
    }
}