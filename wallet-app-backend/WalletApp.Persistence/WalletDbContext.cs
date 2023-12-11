using System.Reflection;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Common;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistance;

public class WalletDbContext : IdentityDbContext<UserIdentity, RoleIdentity, Guid>
{
    private readonly ICurrentUserService _userService;

    public WalletDbContext(DbContextOptions<WalletDbContext> options, ICurrentUserService userService) : base(options)
    {
        _userService = userService;
    }
    
    public DbSet<Token> Tokens { get; set; }
    public DbSet<Currency> Currencies { get; set; }
    public DbSet<AccountData> AccountData { get; set; }
    public DbSet<Note> Notes { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
    public DbSet<DefaultTransaction> DefaultTransactions { get; set; }
    public DbSet<Member> Members { get; set; }
    public DbSet<Notification> Notifications { get; set; }
    public DbSet<NotificationTypeDictionary> NotificationTypeDictionaries { get; set; }
    public DbSet<Group> Groups { get; set; }
    public DbSet<Permission> Permissions { get; set; }
    public DbSet<RolePermission> RolePermissions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        modelBuilder.Seed();

    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
    {
        foreach (var entry in ChangeTracker.Entries<BaseEntity>())
        {
            switch (entry.State)
            {
                case EntityState.Added:
                    entry.Entity.CratedBy = _userService?.Id ?? null;
                    entry.Entity.CreatedTime = DateTime.Now;
                    entry.Entity.IsDeleted = false;
                    break;
                case EntityState.Modified:
                    entry.Entity.ModifiedBy = _userService?.Id ?? null;
                    entry.Entity.ModifiedTime = DateTime.Now;
                    break;
                case EntityState.Deleted:
                    entry.Entity.DeletedBy = _userService?.Id ?? null;
                    entry.Entity.DeletedTime = DateTime.Now;
                    entry.Entity.IsDeleted = true;
                    entry.State = EntityState.Modified;
                    break;
                case EntityState.Detached:
                    break;
                case EntityState.Unchanged:
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        return base.SaveChangesAsync(cancellationToken);
    }
    
}