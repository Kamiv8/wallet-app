using DomainToken = WalletApp.Domain.Entities.Token;
namespace WalletApp.Application.Interfaces.Repository;

public interface ITokenRepository
{
    void UpdateRefreshToken(DomainToken token);
    Task<DomainToken?> GetTokenByUserId(Guid id);
    Task<List<DomainToken>> GetAllUserTokens(Guid userId);
    Task<DomainToken?> GetTokenByIp(Guid userId, string ipAddress);
    Task<DomainToken?> GetTokenByRefreshToken(string refreshToken);
    Task CreateTokenRow(DomainToken token);
    Task RevokeToken(Guid id);
}