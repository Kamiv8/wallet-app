using WalletApp.Application.Enums;
using WalletApp.Domain.Enums;

namespace WalletApp.Application.Common.Account.Register;

public sealed record RegisterDto(string Username, string Email, string Password,
    string ConfirmPassword, IconType IconType);