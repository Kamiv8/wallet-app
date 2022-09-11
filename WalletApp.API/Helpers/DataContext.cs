using Microsoft.EntityFrameworkCore;
using WalletApp.API.Entities;

namespace WalletApp.API.Helpers;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options): base(options){}

    public DbSet<User> Users { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<User>(eb =>
        {
            eb.Property(u => u.Email).IsRequired();
        });
    }
}