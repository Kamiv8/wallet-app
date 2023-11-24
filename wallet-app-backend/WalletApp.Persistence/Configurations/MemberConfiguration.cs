using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistance.Configurations;

public class MemberConfiguration : IEntityTypeConfiguration<Member>
{
    public void Configure(EntityTypeBuilder<Member> builder)
    {
        builder.HasOne(x => x.UserRoleIdentity).WithOne(x => x.Member)
            .OnDelete(DeleteBehavior.Restrict);
    }
}