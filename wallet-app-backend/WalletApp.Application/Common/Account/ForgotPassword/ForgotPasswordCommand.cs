using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Account.ForgotPassword;

public sealed record ForgotPasswordCommand(string Email) : ICommand;
