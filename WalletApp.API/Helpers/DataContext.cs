using Microsoft.EntityFrameworkCore;
using WalletApp.API.Entities;

namespace WalletApp.API.Helpers;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options): base(options){}

    
    public DbSet<User> Users { get; set; }
    public DbSet<UserData> UserDatas { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
    public DbSet<Category> Categories  { get; set; }
    public DbSet<Currency> Currencies { get; set; }
    public DbSet<Group> Groups { get; set; }
    public DbSet<Note> Notes { get; set; }
    public DbSet<Notification> Notifications { get; set; }
    public DbSet<NotificationType> NotificationsType { get; set; }
    public DbSet<Report> Reports { get; set; }
    
    
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
            .HasOne(u => u.UserData)
            .WithOne(ud => ud.User)
            .HasForeignKey<UserData>(ud => ud.UserId);

        modelBuilder.Entity<Currency>()
            .HasMany(c => c.Transactions)
            .WithOne(t => t.Currency)
            .OnDelete(DeleteBehavior.Restrict);
        
        modelBuilder.Entity<Currency>()
            .HasMany(c => c.UserData)
            .WithOne(ud => ud.Currency)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Currency>()
            .HasMany(c => c.Group)
            .WithOne(g => g.Currency)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Category>()
            .HasMany(c => c.Transactions)
            .WithOne(t => t.Category)
            .OnDelete(DeleteBehavior.Restrict);
        
        modelBuilder.Entity<Group>()
            .HasMany(g => g.Reports)
            .WithOne(r => r.Group)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Group>()
            .HasMany(g => g.Transactions)
            .WithOne(t => t.Group)
            .HasForeignKey(p => p.GroupId)
            .OnDelete(DeleteBehavior.Restrict);
        
        modelBuilder.Entity<Group>()
            .HasMany(g => g.Categories)
            .WithOne(c => c.Group)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Group>()
            .HasMany(g => g.Notifications)
            .WithOne(n => n.Group)
            .OnDelete(DeleteBehavior.Restrict);
        
        modelBuilder.Entity<NotificationType>()
            .HasOne(nt => nt.Notification)
            .WithOne(n => n.NotificationType)
            .HasForeignKey<Notification>(n => n.NotificationTypeId);

    }
}