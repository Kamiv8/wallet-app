using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Token.UpdateRefreshToken;

public class
    UpdateRefreshTokenCommandHandler : ICommandHandler<UpdateRefreshTokenCommand,
        RefreshTokenResponseDto>
{
    private readonly IUserManager _userManager;
    private readonly ITokenRepository _tokenRepository;
    private readonly IJWTUtil _jwtUtil;
    private readonly IUnitOfWork _unitOfWork;

    public UpdateRefreshTokenCommandHandler(IUserManager userManager,
        ITokenRepository tokenRepository, IJWTUtil jwtUtil, IUnitOfWork unitOfWork)
    {
        _userManager = userManager;
        _tokenRepository = tokenRepository;
        _jwtUtil = jwtUtil;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResult<RefreshTokenResponseDto>> Handle(UpdateRefreshTokenCommand request,
        CancellationToken cancellationToken)
    {
        if (request.RefreshToken is null)
            return ApiResult<RefreshTokenResponseDto>.Error(TokenErrorMessages.EmptyToken);
        var oldToken = await _tokenRepository.GetTokenByRefreshToken(request.RefreshToken);

        if (oldToken is null || oldToken.RefreshTokenExpiryTime <= DateTime.Now)
            return ApiResult<RefreshTokenResponseDto>.Error(TokenErrorMessages.CannotFindToken);

        var user = await _userManager.FindByIdAsync(oldToken.UserIdentityId);

        var newRefreshToken = _jwtUtil.GenerateRefreshToken(request.IpAddress);

        oldToken.RefreshToken = newRefreshToken.RefreshToken;
        oldToken.RefreshTokenExpiryTime = newRefreshToken.RefreshTokenExpiryTime;
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        var jwtToken = await _jwtUtil.GenerateJwtToken(user);

        var response = new RefreshTokenResponseDto(jwtToken, newRefreshToken.RefreshToken);

        return ApiResult<RefreshTokenResponseDto>.Success(response);
    }
}