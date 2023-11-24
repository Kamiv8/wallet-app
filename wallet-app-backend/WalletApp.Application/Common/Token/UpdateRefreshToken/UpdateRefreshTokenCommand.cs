using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Token.UpdateRefreshToken;

public sealed record UpdateRefreshTokenCommand
    (string? RefreshToken, string? IpAddress) : ICommand<RefreshTokenResponseDto>;
