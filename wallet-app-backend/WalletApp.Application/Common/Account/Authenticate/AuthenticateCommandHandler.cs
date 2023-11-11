using MediatR;
using Microsoft.Extensions.Options;
using WalletApp.Application.Common;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Common;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Options;

namespace WalletApp.Application.Account.Authenticate;

public class
    AuthenticateCommandHandler : IRequestHandler<AuthenticateCommand,
        ApiResult<AuthenticateResponseDto>>
{
    private readonly IAccountRepository _accountRepository;
    private readonly ITokenRepository _tokenRepository;
    private readonly IJWTUtil _jwtUtil;
    private readonly JwtOptions _options;


    public AuthenticateCommandHandler(
        IAccountRepository accountRepository,
        ITokenRepository tokenRepository,
        IJWTUtil jwtUtil,
        IOptions<JwtOptions> options
    )
    {
        _accountRepository = accountRepository;
        _tokenRepository = tokenRepository;
        _jwtUtil = jwtUtil;
        _options = options.Value;
    }

    public async Task<ApiResult<AuthenticateResponseDto>> Handle(AuthenticateCommand request,
        CancellationToken cancellationToken)
    {
        var account = await _accountRepository.GetAccountByEmail(request.Email);

        if (account is null || !BCrypt.Net.BCrypt.Verify(request.Password, account.PasswordHash))
            return new ApiResult<AuthenticateResponseDto>(ApiResultStatus.Error, null,
                "Email or password is incorrect");

        if (account.IsDeleted)
            return new ApiResult<AuthenticateResponseDto>(ApiResultStatus.Error, null,
                "This account is deleted");

        var newToken = _jwtUtil.GenerateJwtToken(account);
        var refreshToken = _jwtUtil.GenerateRefreshToken();

        var token = await _tokenRepository.GetTokenByUserId(account.Id);
        if (token is null)
            return new ApiResult<AuthenticateResponseDto>(ApiResultStatus.Success, null,
                "Cannot find old token");
        token.RefreshToken = refreshToken.RefreshToken;
        token.RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(_options.RefreshTokenTtl);

        await _accountRepository.Save(cancellationToken);
        var dto = new AuthenticateResponseDto(newToken, token.RefreshToken);

        return new ApiResult<AuthenticateResponseDto>(ApiResultStatus.Success, dto, "");
    }
}