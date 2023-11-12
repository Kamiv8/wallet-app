using DomainAccount = WalletApp.Domain.Entities.Account;
namespace WalletApp.Application.Interfaces.Repository;


public interface IAccountRepository
{
    Task<ICollection<DomainAccount>> GetAll();
    Task<DomainAccount?> GetAccountById(Guid id);
    Task<DomainAccount?> GetAccountByEmail(string email);
    Task<DomainAccount?> GetAccountByRefreshToken(string refreshToken, string ipAddress);
    Task CreateAccount(DomainAccount account);
    Task RemoveAccount(Guid id);

    Task Save(CancellationToken cancellationToken, bool isBaseEntity = false);

}