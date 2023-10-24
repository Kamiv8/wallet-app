using Microsoft.EntityFrameworkCore;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces;

public interface IWalletDbContext
{
    DbSet<Domain.Entities.Account> Accounts { get; set; }
    DbSet<Token> Tokens { get; set; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}