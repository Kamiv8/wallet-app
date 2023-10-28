using Microsoft.EntityFrameworkCore;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence;

public static class RelationshipConfig
{
    public static void CreateRelationship(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>()
            .HasOne(a => a.Token)
            .WithOne(t => t.Account)
            .HasForeignKey<Token>(t => t.AccountId);
        
    }
}