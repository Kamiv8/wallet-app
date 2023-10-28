using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface ITokenRepository
{
    void UpdateRefreshToken(Domain.Entities.Token token);
    Task<Domain.Entities.Token?> GetTokenByUserId(Guid id);
    Task CreateTokenRow(Domain.Entities.Token token);
    Task RevokeToken(Guid id);
    Task Save(CancellationToken cancellationToken);
}