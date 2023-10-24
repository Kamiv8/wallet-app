using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Repositories;

public class TokenRepository : ITokenRepository
{
    private readonly IWalletDbContext _db;
    
    public TokenRepository(IWalletDbContext db) {
        _db = db;
    }


    public void UpdateRefreshToken(Token token)
    {
        _db.Tokens.Update(token);
    }

    public async Task<Token?> GetTokenByUserId(Guid id)
    {
        return await _db.Tokens.SingleOrDefaultAsync(x => x.AccountId == id);
        
    }

    public async Task CreateTokenRow(Token token)
    {
        await _db.Tokens.AddAsync(token);
    }

    public async Task Save(CancellationToken cancellationToken)
    {
       await _db.SaveChangesAsync(cancellationToken);
    }
}