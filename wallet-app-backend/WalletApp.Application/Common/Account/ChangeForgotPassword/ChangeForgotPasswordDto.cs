namespace WalletApp.Application.Common.Account.ChangeForgotPassword;

public sealed record ChangeForgotPasswordDto(string Email, string Token, string Password,
    string ConfirmPassword);