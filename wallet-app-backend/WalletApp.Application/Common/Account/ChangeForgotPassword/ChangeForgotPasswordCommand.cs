using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Account.ChangeForgotPassword;

public sealed record ChangeForgotPasswordCommand(
    string Email,
    string Token,
    string Password,
    string ConfirmPassword
) : ICommand;