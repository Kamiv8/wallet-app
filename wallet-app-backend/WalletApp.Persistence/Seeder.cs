using Microsoft.EntityFrameworkCore;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistance;

public static class Seeder
{
    public static void Seed(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(c => c.HasData(
            new Category { Id = Guid.NewGuid(), Name = "Rachunki" }
        ));

        modelBuilder.Entity<Currency>(c => c.HasData(
            new Currency
            {
                Id = Guid.NewGuid(), CurrencyName = "dolar amerykanski", Code = "USD",
                Bid = (decimal)3.972, Ask = (decimal)4.055, TradingDate = DateTime.Now
            },
            new Currency
            {
                Id = Guid.NewGuid(), CurrencyName = "euro", Code = "EUR", Bid = (decimal)3.972,
                Ask = (decimal)4.055, TradingDate = DateTime.Now
            },
            new Currency
            {
                Id = Guid.NewGuid(), CurrencyName = "frank szwajcarski", Code = "CHF",
                Bid = (decimal)3.972, Ask = (decimal)4.055, TradingDate = DateTime.Now
            },
            new Currency
            {
                Id = Guid.NewGuid(), CurrencyName = "funt szterling", Code = "GBP",
                Bid = (decimal)3.972, Ask = (decimal)4.055, TradingDate = DateTime.Now
            },
            new Currency
            {
                Id = Guid.NewGuid(), CurrencyName = "polski złoty", Code = "PLN", Bid = 1, Ask = 1,
                TradingDate = DateTime.Now
            }
        ));

        modelBuilder.Entity<CategoryColors>(c => c.HasData(
            new CategoryColors
            {
                Color = "#fffffff"
            }));
    }
}