using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Account.Authenticate;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Account.Authenticate;

public class
    AuthenticateCommandHandler : ICommandHandler<AuthenticateCommand,
    AuthenticateResponseDto>
{
    private readonly IAppSignInManager _signInManager;
    private readonly IUserManager _userManager;
    private readonly ITokenRepository _tokenRepository;
    private readonly IJWTUtil _jwtUtil;
    private readonly IUnitOfWork _unitOfWork;

    public AuthenticateCommandHandler(
        IAppSignInManager signInManager,
        IUserManager userManager,
        ITokenRepository tokenRepository,
        IJWTUtil jwtUtil,
        IUnitOfWork unitOfWork
    )
    {
        _signInManager = signInManager;
        _userManager = userManager;
        _tokenRepository = tokenRepository;
        _jwtUtil = jwtUtil;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResult<AuthenticateResponseDto>> Handle(AuthenticateCommand request,
        CancellationToken cancellationToken)
    {
        var signIn = await _signInManager.PasswordSignInAsync(request.Username, request.Password);

        if (!signIn.Succeeded)
            return ApiResult<AuthenticateResponseDto>.Error(AccountErrorMessages.IncorrectPassword);

        var account = await _userManager.FindByNameAsync(request.Username);

        if (account is null)
            return ApiResult<AuthenticateResponseDto>.Error(AccountErrorMessages.UserNotExist);

        var newAccessToken = await _jwtUtil.GenerateJwtToken(account);
        var refreshToken = _jwtUtil.GenerateRefreshToken(request.IpAddress);
        refreshToken.UserIdentityId = account.Id;
        var token = await _tokenRepository.GetTokenByIp(account.Id, refreshToken.IpAddress);

        if (token is not null)
        {
            token.RefreshToken = refreshToken.RefreshToken;
            token.RefreshTokenExpiryTime = refreshToken.RefreshTokenExpiryTime;
        }
        else
        {
            await _tokenRepository.CreateTokenRow(refreshToken);
        }

        await _userManager.UpdateAsync(account);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        var dto = new AuthenticateResponseDto(newAccessToken, refreshToken!.RefreshToken!);

        return ApiResult<AuthenticateResponseDto>.Success(dto);
    }
}