using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Domain.Enums;

namespace WalletApp.Application.Common.Account.Register;

public record RegisterCommand(string Username, string Email, string Password,
    string ConfirmPassword, IconType IconType) : ICommand;