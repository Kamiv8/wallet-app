using Microsoft.EntityFrameworkCore;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces;

public interface IWalletDbContext
{
    DbSet<Domain.Entities.Account> Accounts { get; set; }
    DbSet<Domain.Entities.Token> Tokens { get; set; }
    DbSet<Domain.Entities.Currency> Currencies { get; set; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}