using Microsoft.AspNetCore.Identity;
using WalletApp.Application.Dtos;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Entities;

namespace WalletApp.Infractructure.UserManager;

public class AppUserManager : IUserManager
{
    private readonly UserManager<UserIdentity> _userManager;

    public AppUserManager(UserManager<UserIdentity> userManager)
    {
        _userManager = userManager;
    }

    public async Task<string> GenerateEmailConfirmationTokenAsync(UserIdentity user)
    {
        return await _userManager.GenerateEmailConfirmationTokenAsync(user);
    }

    public async Task<AppIdentityResult> ConfirmEmailAsync(UserIdentity user, string token)
    {
        return CreateIdentityResponse(await _userManager.ConfirmEmailAsync(user, token));
    }

    public async Task<AppIdentityResult> CreateAsync(UserIdentity user, string password)
    {
        return CreateIdentityResponse(await _userManager.CreateAsync(user, password));
    }

    public async Task<UserIdentity?> FindByEmailAsync(string email)
    {
        return await _userManager.FindByEmailAsync(email);
    }

    public async Task<UserIdentity?> FindByNameAsync(string username)
    {
        return await _userManager.FindByNameAsync(username);
    }

    public async Task<UserIdentity?> FindByIdAsync(string userId)
    {
        return await _userManager.FindByIdAsync(userId);
    }

    public async Task UpdateAsync(UserIdentity userIdentity)
    {
        await _userManager.UpdateAsync(userIdentity);
    }

    public async Task<AppIdentityResult> ConfirmEmail(UserIdentity userIdentity, string token)
    {
        return CreateIdentityResponse(await _userManager.ConfirmEmailAsync(userIdentity, token));
    }

    public async Task<string> GeneratePasswordResetTokenAsync(UserIdentity userIdentity)
    {
        return await _userManager.GeneratePasswordResetTokenAsync(userIdentity);
    }

    public async Task<AppIdentityResult> ResetPasswordAsync(UserIdentity userIdentity, string token,
        string password)
    {
        return CreateIdentityResponse(await _userManager.ResetPasswordAsync(userIdentity, token, password));
    }
    
    
    private static AppIdentityResult CreateIdentityResponse(IdentityResult result)
    {
        var errors = result.Errors.Select(x => new AppIdentityError(x.Code, x.Description));
        return new AppIdentityResult { Succeeded = result.Succeeded, Errors = errors };
    }
    
}