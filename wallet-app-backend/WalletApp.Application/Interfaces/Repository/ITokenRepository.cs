using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface ITokenRepository
{
    void UpdateRefreshToken(Token token);
    Task<Token?> GetTokenByUserId(Guid id);
    Task CreateTokenRow(Token token);
    Task Save(CancellationToken cancellationToken);
}