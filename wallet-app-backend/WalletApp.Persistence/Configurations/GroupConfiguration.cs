using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistance.Configurations;

public class GroupConfiguration : IEntityTypeConfiguration<Group>
{
    public void Configure(EntityTypeBuilder<Group> builder)
    {
        builder.Property(x => x.Name).IsRequired().HasColumnType("nvarchar").HasMaxLength(40);
        builder.Property(x => x.IconType).IsRequired().HasColumnType("int");
        builder.Property(x => x.MaxMembers).IsRequired().HasColumnType("int");
        builder.Property(x => x.Money).IsRequired().HasDefaultValue(0).HasColumnType("decimal")
            .HasPrecision(15, 2);

        builder.HasMany(x => x.Members).WithOne(x => x.Group).HasForeignKey(x => x.GroupId);
        builder.HasMany(x => x.Transactions).WithOne(x => x.Group).HasForeignKey(x => x.GroupId)
            .IsRequired(false);
        builder.HasMany(x => x.DefaultTransactions).WithOne(x => x.Group)
            .HasForeignKey(x => x.GroupId).IsRequired(false);
        builder.HasMany(x => x.Categories).WithOne(x => x.Group).HasForeignKey(x => x.GroupId);
        builder.HasMany(x => x.Notes).WithOne(x => x.Group).HasForeignKey(x => x.GroupId);
        builder.HasMany(x => x.Notifications).WithOne(x => x.Group).HasForeignKey(x => x.GuidId);
    }
}