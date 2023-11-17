using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Common;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistence.Repositories;

public class TokenRepository : ITokenRepository
{
    private readonly WalletDbContext _db;
    
    public TokenRepository(WalletDbContext db) {
        _db = db;
    }


    public void UpdateRefreshToken(Token token)
    {
        _db.Tokens.Update(token);
    }

    public async Task<Token?> GetTokenByUserId(Guid id)
    {
        return await _db.Tokens.SingleOrDefaultAsync(x => x.UserIdentityId == id);
        
    }

    public async Task<List<Token>> GetAllUserTokens(Guid userId)
    {
        return await _db.Tokens.Where(x => x.UserIdentityId == userId).ToListAsync();
    }

    public async Task<Token?> GetTokenByIp(Guid userId, string ipAddress)
    {
        return await _db.Tokens.SingleOrDefaultAsync(x => x.UserIdentityId == userId && x.IpAddress == ipAddress);
    }

    public async Task<Token?> GetTokenByRefreshToken(string refreshToken)
    {
        return await _db.Tokens.SingleOrDefaultAsync(x => x.RefreshToken == refreshToken);

    }

    public async Task CreateTokenRow(Token token)
    {
        await _db.Tokens.AddAsync(token);
    }

    public async Task RevokeToken(Guid id)
    {
        var token = await _db.Tokens.SingleOrDefaultAsync(x => x.UserIdentityId == id);
        if (token is null) throw new ErrorDetails("Invalid token");
        token.RefreshToken = null;
        token.RefreshTokenExpiryTime = null;
        _db.Tokens.Update(token);
    }

    public async Task Save(CancellationToken cancellationToken)
    {
       await _db.SaveChangesAsync(cancellationToken);
    }
}