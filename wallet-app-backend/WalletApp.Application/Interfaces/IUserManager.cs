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
    Task<UserIdentity?> FindByIdAsync(Guid? userId);
    Task UpdateAsync(UserIdentity userIdentity);
    Task<UserIdentity?> FindUserAndDataByIdAsync(Guid userId);
    Task<AppIdentityResult> ConfirmEmail(UserIdentity userIdentity, string token);
    Task<string> GeneratePasswordResetTokenAsync(UserIdentity userIdentity);
    Task<AppIdentityResult> ResetPasswordAsync(UserIdentity userIdentity, string token,
        string password);
    Task<AppIdentityResult> ChangePasswordAsync(UserIdentity user, string currentPassword,
        string newPassword);
}