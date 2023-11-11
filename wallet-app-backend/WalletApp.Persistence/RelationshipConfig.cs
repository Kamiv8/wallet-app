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

        modelBuilder.Entity<Account>()
            .HasOne(a => a.AccountData)
            .WithOne(a => a.Account)
            .HasForeignKey<AccountData>(a => a.AccountId);
        
        modelBuilder.Entity<Account>()
            .HasMany(a => a.Transactions)
            .WithOne(a => a.Account)
            .HasForeignKey(a => a.AccountId);

        modelBuilder.Entity<Account>()
            .HasMany(a => a.Notes)
            .WithOne(a => a.Account)
            .HasForeignKey(a => a.AccountId);

        modelBuilder.Entity<Transaction>()
            .HasOne(t => t.Category)
            .WithMany(t => t.Transactions)
            .HasForeignKey(t => t.CategoryId);

        modelBuilder.Entity<Transaction>()
            .HasOne(t => t.Currency)
            .WithMany(t => t.Transactions)
            .HasForeignKey(t => t.CurrencyId);
        


    }
}