using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Account.ChangePassword;

public sealed record ChangePasswordCommand(Guid UserId, string OldPassword, string NewPassword) : ICommand;