using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface IAccountRepository
{
    Task<ICollection<Domain.Entities.Account>> GetAll();
    Task<Domain.Entities.Account> GetAccountById(Guid id);
    Task<Domain.Entities.Account?> GetAccountByEmail(string email);
    Task CreateAccount(Domain.Entities.Account account);
    void UpdateAccount(Domain.Entities.Account account);
    Task RemoveAccount(Guid id);

    Task Save(CancellationToken cancellationToken);

}