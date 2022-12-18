using Microsoft.EntityFrameworkCore;
using WalletApp.API.Entities;

namespace WalletApp.API.Helpers;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options): base(options){}

    public DbSet<User> Users { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
    public DbSet<Category> Categories  { get; set; }
    public DbSet<Currency> Currencies { get; set; }
    public DbSet<Group> Groups { get; set; }
    public DbSet<Member> Members { get; set; }
    public DbSet<Note> Notes { get; set; }
    public DbSet<Notification> Notifications { get; set; }
    public DbSet<NotificationType> NotificationsType { get; set; }
    public DbSet<Report> Reports { get; set; }
    public DbSet<Role> Roles { get; set; }
    
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<User>()
            .HasMany(u => u.Transactions)
            .WithOne(t => t.User)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<User>()
            .HasMany(u => u.Reports)
            .WithOne(r => r.User)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<User>()
            .HasMany(u => u.Categories)
            .WithOne(c => c.User)
            .OnDelete(DeleteBehavior.Restrict);
        
        modelBuilder.Entity<User>()
            .HasMany(n => n.Notifications)
            .WithOne(u => u.User)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<User>()
            .HasMany(u => u.Notes)
            .WithOne(n => n.User)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<User>()
            .HasOne(u => u.Group)
            .WithOne(g => g.User)
            .HasForeignKey<Group>(g => g.AdminId);

        modelBuilder.Entity<User>()
            .HasOne(u => u.Member)
            .WithOne(m => m.User)
            .HasForeignKey<Member>(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Currency>()
            .HasOne(c => c.Transaction)
            .WithOne(t => t.Currency)
            .HasForeignKey<Transaction>(t => t.CurrencyId);

        modelBuilder.Entity<Currency>()
            .HasOne(c => c.Group)
            .WithOne(g => g.Currency)
            .HasForeignKey<Group>(g => g.CurrencyId);

        modelBuilder.Entity<Category>()
            .HasOne(c => c.Transaction)
            .WithOne(t => t.Category)
            .HasForeignKey<Transaction>(t => t.CategoryId);

        modelBuilder.Entity<Role>()
            .HasOne(r => r.Member)
            .WithOne(m => m.Role)
            .HasForeignKey<Member>(m => m.RoleId);

        modelBuilder.Entity<Member>()
            .HasOne(m => m.Transaction)
            .WithOne(t => t.Member)
            .HasForeignKey<Transaction>(t => t.MemberId);
        
        modelBuilder.Entity<Group>()
            .HasMany(g => g.Transactions)
            .WithOne(t => t.Group)
            .OnDelete(DeleteBehavior.Restrict);
        
        modelBuilder.Entity<Group>()
            .HasMany(g => g.Members)
            .WithOne(m => m.Group)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Group>()
            .HasMany(g => g.Reports)
            .WithOne(r => r.Group)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Group>()
            .HasMany(g => g.Notifications)
            .WithOne(n => n.Group)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Group>()
            .HasMany(g => g.Notes)
            .WithOne(n => n.Group)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<NotificationType>()
            .HasOne(nt => nt.Notification)
            .WithOne(n => n.NotificationType)
            .HasForeignKey<Notification>(n => n.NotificationTypeId);

    }
}