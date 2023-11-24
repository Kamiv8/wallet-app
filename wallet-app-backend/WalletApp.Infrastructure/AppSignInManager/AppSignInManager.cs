using Microsoft.AspNetCore.Identity;
using WalletApp.Application.Dtos;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Entities;

namespace WalletApp.Infractructure.AppSignInManager;

public class AppSignInManager : IAppSignInManager
{
    private readonly SignInManager<UserIdentity> _signInManager;

    public AppSignInManager(SignInManager<UserIdentity> signInManager)
    {
        _signInManager = signInManager;
    }

    public async Task<AppSignInResult> PasswordSignInAsync(string username, string password)
    {
        return CreateSignInResponse(await _signInManager.PasswordSignInAsync(username, password,
            isPersistent: false,
            lockoutOnFailure: false));
    }

    private static AppSignInResult CreateSignInResponse(SignInResult result)
    {
        return new AppSignInResult(result.Succeeded, result.IsLockedOut, result.IsNotAllowed,
            result.RequiresTwoFactor);
    }
}