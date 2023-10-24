using System.Reflection;
using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Common;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence;

public class WalletDbContext : DbContext, IWalletDbContext
{
    private readonly ICurrentUserService _userService;

    public WalletDbContext(DbContextOptions<WalletDbContext> options): base(options) {}

    public WalletDbContext(DbContextOptions<WalletDbContext> options, ICurrentUserService userService) : base(options)
    {
        _userService = userService;
    }
    
    public DbSet<Account> Accounts { get; set; }
    public DbSet<Token> Tokens { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
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
                    entry.Entity.ModifiedBy = _userService?.Id;
                    entry.Entity.ModifiedTime = DateTime.Now;
                    break;
                case EntityState.Deleted:
                    entry.Entity.DeletedBy = _userService?.Id;
                    entry.Entity.DeletedTime = DateTime.Now;
                    entry.Entity.IsDeleted = true;
                    entry.State = EntityState.Modified;
                    break;
            }
        }

        return base.SaveChangesAsync(cancellationToken);
    }
    
}