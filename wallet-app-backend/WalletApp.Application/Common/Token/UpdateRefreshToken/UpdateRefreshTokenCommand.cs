using MediatR;
using WalletApp.Application.Common;

namespace WalletApp.Application.Token.UpdateRefreshToken;

public sealed record UpdateRefreshTokenCommand
    (string? RefreshToken) : IRequest<ApiResult<RefreshTokenDto>>;
