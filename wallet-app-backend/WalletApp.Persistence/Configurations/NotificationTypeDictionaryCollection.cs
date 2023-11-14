using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Configurations;

public class
    NotificationTypeDictionaryCollection : IEntityTypeConfiguration<NotificationTypeDictionary>
{
    public void Configure(EntityTypeBuilder<NotificationTypeDictionary> builder)
    {
        builder.HasMany(x => x.Notifications).WithOne(x => x.NotificationType)
            .HasForeignKey(x => x.NotificationTypeId);
    }
}