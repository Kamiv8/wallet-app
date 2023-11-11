using MediatR;
using WalletApp.Application.Common;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Common;

namespace WalletApp.Application.Token.RevokeRefreshToken;

public class
    RevokeRefreshTokenCommandHandler : IRequestHandler<RevokeRefreshTokenCommand, ApiResult>
{
    private readonly ITokenRepository _tokenRepository;
    private readonly ICurrentUserService _userService;

    public RevokeRefreshTokenCommandHandler(ITokenRepository tokenRepository,
        ICurrentUserService userService)
    {
        _tokenRepository = tokenRepository;
        _userService = userService;
    }


    public async Task<ApiResult> Handle(RevokeRefreshTokenCommand request,
        CancellationToken cancellationToken)
    {
        var user = _userService.Account?.Id;
        if (user is null) return new ApiResult(ApiResultStatus.Error, "Cannot find user");

        await _tokenRepository.RevokeToken((Guid)user);
        await _tokenRepository.Save(cancellationToken);

        return new ApiResult(ApiResultStatus.Success, null);
    }
}