using WalletApp.Application.Enums;

namespace WalletApp.Application.Account.Register;

public sealed record RegisterDto(string Username, string Email, string Password,
    string ConfirmPassword, IconType IconType);