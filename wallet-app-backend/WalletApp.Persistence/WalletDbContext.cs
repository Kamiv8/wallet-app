using System.Reflection;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Common;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence;

public class WalletDbContext : IdentityDbContext<UserIdentity, RoleIdentity, Guid>, IWalletDbContext
{
    private readonly ICurrentUserService _userService;

    public WalletDbContext(DbContextOptions<WalletDbContext> options): base(options) {}

    public WalletDbContext(DbContextOptions<WalletDbContext> options, ICurrentUserService userService) : base(options)
    {
        _userService = userService;
    }
    
    public DbSet<Account> Accounts { get; set; }
    public DbSet<Token> Tokens { get; set; }
    public DbSet<Currency> Currencies { get; set; }
    public DbSet<AccountData> AccountData { get; set; }
    public DbSet<Note> Notes { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Transaction> Transactions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<IdentityUserLogin<Guid>>(entity =>
        {
            entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });
        });
        
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        modelBuilder.CreateRelationship();
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
            }
        }

        return base.SaveChangesAsync(cancellationToken);
    }
    
}