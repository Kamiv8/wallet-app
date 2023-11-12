using MediatR;
using Microsoft.AspNetCore.Identity;
using WalletApp.Application.Common;
using WalletApp.Application.Consts;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Account.Authenticate;

public class
    AuthenticateCommandHandler : IRequestHandler<AuthenticateCommand,
        ApiResult<AuthenticateResponseDto>>
{
    private readonly SignInManager<UserIdentity> _signInManager;
    private readonly UserManager<UserIdentity> _userManager;
    private readonly ITokenRepository _tokenRepository;
    private readonly IJWTUtil _jwtUtil;
    private readonly ICurrentUserService _userService;


    public AuthenticateCommandHandler(
        SignInManager<UserIdentity> signInManager,
        UserManager<UserIdentity> userManager,
        ITokenRepository tokenRepository,
        IJWTUtil jwtUtil
    )
    {
        _signInManager = signInManager;
        _userManager = userManager;
        _tokenRepository = tokenRepository;
        _jwtUtil = jwtUtil;
    }

    public async Task<ApiResult<AuthenticateResponseDto>> Handle(AuthenticateCommand request,
        CancellationToken cancellationToken)
    {
        var signIn = await _signInManager.PasswordSignInAsync(request.Username, request.Password,
            isPersistent: false, lockoutOnFailure: false);

        if (!signIn.Succeeded)
            return new ApiResult<AuthenticateResponseDto>(ApiResultStatus.Error, null,
                AccountErrorMessages.IncorrectPassword);

        var account = await _userManager.FindByNameAsync(request.Username);

        if (account is null && await _userManager.CheckPasswordAsync(account, request.Password))
            return new ApiResult<AuthenticateResponseDto>(ApiResultStatus.Error, null,
                AccountErrorMessages.IncorrectPassword);

        if (!account.LockoutEnabled)
            return new ApiResult<AuthenticateResponseDto>(ApiResultStatus.Error, null,
                AccountErrorMessages.DeletedAccount);

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
        await _tokenRepository.Save(cancellationToken);

        var dto = new AuthenticateResponseDto(newAccessToken, token.RefreshToken);

        return new ApiResult<AuthenticateResponseDto>(ApiResultStatus.Success, dto, "");
    }
}