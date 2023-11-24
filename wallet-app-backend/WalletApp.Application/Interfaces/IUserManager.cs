using WalletApp.Application.Dtos;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces;

public interface IUserManager
{
    Task<string> GenerateEmailConfirmationTokenAsync(UserIdentity user);
    Task<AppIdentityResult> ConfirmEmailAsync(UserIdentity user, string token);

    Task<AppIdentityResult> CreateAsync(UserIdentity user, string password);
    Task<UserIdentity?> FindByEmailAsync(string email);
    Task<UserIdentity?> FindByNameAsync(string username);
    Task<UserIdentity?> FindByIdAsync(string userId);
    Task UpdateAsync(UserIdentity userIdentity);
    Task<AppIdentityResult> ConfirmEmail(UserIdentity userIdentity, string token);
}