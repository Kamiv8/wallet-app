using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface ITokenRepository
{
    void UpdateRefreshToken(Domain.Entities.Token token);
    Task<Domain.Entities.Token?> GetTokenByUserId(Guid id);
    Task<List<Domain.Entities.Token>> GetAllUserTokens(Guid userId);
    Task<Domain.Entities.Token?> GetTokenByIp(Guid userId, string ipAddress);
    Task<Domain.Entities.Token?> GetTokenByRefreshToken(string refreshToken);
    Task CreateTokenRow(Domain.Entities.Token token);
    Task RevokeToken(Guid id);
    Task Save(CancellationToken cancellationToken);
}