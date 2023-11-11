using MediatR;
using WalletApp.Application.Common;

namespace WalletApp.Application.Account.Authenticate;

public sealed record AuthenticateCommand
    (string Email, string Password) : IRequest<ApiResult<AuthenticateResponseDto>>;