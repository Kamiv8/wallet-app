using MediatR;
using WalletApp.Application.Common;

namespace WalletApp.Application.Token.RevokeRefreshToken;

public sealed record RevokeRefreshTokenCommand : IRequest<ApiResult>;
