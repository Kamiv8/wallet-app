using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface IAccountDataRepository
{
    Task CreateAsync(AccountData accountData);
    Task<AccountData?> GetUserById(Guid userId, CancellationToken cancellationToken);
}