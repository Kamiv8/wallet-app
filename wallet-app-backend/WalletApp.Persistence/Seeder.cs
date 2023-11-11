using Microsoft.EntityFrameworkCore;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence;

public static class Seeder
{
    public static void Seed(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(c => c.HasData(
            new Category() { Id = Guid.NewGuid(), Name = "Rachunki" }
        ));



    } 
}