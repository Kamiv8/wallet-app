namespace WalletApp.Application.Interfaces.Repository;

public interface IPermissionRepository
{
    Task<HashSet<string>> GetPermissionAsync(Guid userId);
}