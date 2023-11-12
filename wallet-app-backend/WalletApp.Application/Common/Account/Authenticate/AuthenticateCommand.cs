using MediatR;
using WalletApp.Application.Common;

namespace WalletApp.Application.Account.Authenticate;

public sealed record AuthenticateCommand
    (string Username, string Password,string IpAddress) : IRequest<ApiResult<AuthenticateResponseDto>>;