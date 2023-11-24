using MediatR;
using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Account.Authenticate;

namespace WalletApp.Application.Common.Account.Authenticate;

public sealed record AuthenticateCommand
    (string Username, string Password,string IpAddress) : ICommand<AuthenticateResponseDto>;