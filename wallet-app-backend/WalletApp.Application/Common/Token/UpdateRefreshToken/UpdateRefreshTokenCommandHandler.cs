using MediatR;
using Microsoft.AspNetCore.Identity;
using WalletApp.Application.Common;
using WalletApp.Application.Consts;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Token.UpdateRefreshToken;

public class
    UpdateRefreshTokenCommandHandler : IRequestHandler<UpdateRefreshTokenCommand,
        ApiResult<RefreshTokenResponseDto>>
{
    private readonly UserManager<UserIdentity> _userManager;
    private readonly ITokenRepository _tokenRepository;
    private readonly IJWTUtil _jwtUtil;

    public UpdateRefreshTokenCommandHandler(UserManager<UserIdentity> userManager,
        ITokenRepository tokenRepository, IJWTUtil jwtUtil)
    {
        _userManager = userManager;
        _tokenRepository = tokenRepository;
        _jwtUtil = jwtUtil;
    }

    public async Task<ApiResult<RefreshTokenResponseDto>> Handle(UpdateRefreshTokenCommand request,
        CancellationToken cancellationToken)
    {
        if (request.RefreshToken is null)
            return new ApiResult<RefreshTokenResponseDto>(ApiResultStatus.Error, null,
                TokenErrorMessages.EmptyToken
            );
        var oldToken = await _tokenRepository.GetTokenByRefreshToken(request.RefreshToken);

        if (oldToken is null || oldToken.RefreshTokenExpiryTime <= DateTime.Now)
            return new ApiResult<RefreshTokenResponseDto>(ApiResultStatus.Error, null,
                TokenErrorMessages.CannotFindToken);

        var user = await _userManager.FindByIdAsync(oldToken.UserIdentityId.ToString());

        var newRefreshToken = _jwtUtil.GenerateRefreshToken(request.IpAddress);

        oldToken.RefreshToken = newRefreshToken.RefreshToken;
        oldToken.RefreshTokenExpiryTime = newRefreshToken.RefreshTokenExpiryTime;
        await _tokenRepository.Save(cancellationToken);

        var jwtToken = await _jwtUtil.GenerateJwtToken(user);

        var response = new RefreshTokenResponseDto(jwtToken, newRefreshToken.RefreshToken);

        return new ApiResult<RefreshTokenResponseDto>(ApiResultStatus.Success, response, null);
    }
}