using MediatR;
using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Account.ConfirmRegisterEmail;

public sealed record ConfirmRegisterEmailCommand(string Email, string Token) : ICommand;
