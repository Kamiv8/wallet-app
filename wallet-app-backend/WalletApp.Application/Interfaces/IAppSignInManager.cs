using WalletApp.Application.Dtos;

namespace WalletApp.Application.Interfaces;

public interface IAppSignInManager
{
    Task<AppSignInResult> PasswordSignInAsync(string username, string password);
}