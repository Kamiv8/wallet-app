using Microsoft.EntityFrameworkCore;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces;

public interface IWalletDbContext
{
    DbSet<Domain.Entities.Token> Tokens { get; set; }
    DbSet<Domain.Entities.Currency> Currencies { get; set; }
    DbSet<Domain.Entities.Transaction> Transactions { get; set; }
    DbSet<AccountData> AccountData { get; set; }
    DbSet<Note> Notes { get; set; }
    DbSet<Category> Categories { get; set; }
    DbSet<Member> Members { get; set; }
    DbSet<Notification> Notifications { get; set; }
    DbSet<NotificationTypeDictionary> NotificationTypeDictionaries { get; set; }
    DbSet<Group> Groups { get; set; }
    
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}