using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Configurations;

public class NoteConfiguration : BaseConfiguration<Note>, IEntityTypeConfiguration<Note>
{
    public void Configure(EntityTypeBuilder<Note> builder)
    {
        builder.Property(n => n.Title).IsRequired().HasColumnType("varchar").HasMaxLength(50);
        builder.Property(n => n.Text).IsRequired(false).HasColumnType("varchar").HasMaxLength(500);
        builder.Property(n => n.TextColor).IsRequired(false).HasColumnType("varchar")
            .HasMaxLength(7);
        builder.Property(n => n.BackgroundColor).IsRequired(false).HasColumnType("varchar")
            .HasMaxLength(7);
        builder.Property(n => n.IsDone).IsRequired().HasColumnType("bit").HasDefaultValue(0);


    }
}