using MediatR;
using Microsoft.Extensions.Options;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Common;
using WalletApp.Application.Interfaces;

namespace WalletApp.Application.Account.Authenticate;

public class AuthenticateCommandHandler : IRequestHandler<AuthenticateCommand, AuthenticateDto>
{
    private readonly IAccountRepository _accountRepository;
    private readonly ITokenRepository _tokenRepository;
    private readonly IJWTUtil _jwtUtil;
    private readonly JWTConfig _options;


    public AuthenticateCommandHandler(IAccountRepository accountRepository, ITokenRepository tokenRepository , IJWTUtil jwtUtil, IOptions<JWTConfig> options)
    {
        _accountRepository = accountRepository;
        _tokenRepository = tokenRepository;
        _jwtUtil = jwtUtil;
        _options = options.Value;
    }
    
    public async Task<AuthenticateDto> Handle(AuthenticateCommand request, CancellationToken cancellationToken)
    {
        var account = await _accountRepository.GetAccountByEmail(request.Email);
        
        if (account is null || !BCrypt.Net.BCrypt.Verify(request.Password, account.PasswordHash))
            throw new ErrorDetails("Email or password is incorrect");

        if (account.IsDeleted)
            throw new ErrorDetails("This account is deleted");
        var newToken = _jwtUtil.GenerateJwtToken(account);
        var refreshToken = _jwtUtil.GenerateRefreshToken();

        var token = await _tokenRepository.GetTokenByUserId(account.Id);
        if (token is null)
            throw new ErrorDetails("Cannot find old token");
        
        _accountRepository.UpdateAccount(account);
        token.RefreshToken = refreshToken.RefreshToken;
        token.RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(_options.RefreshTokenTTL);
        _tokenRepository.UpdateRefreshToken(token);

        await _accountRepository.Save(cancellationToken);
        var dto = new AuthenticateDto()
        {
            RefreshToken = token.RefreshToken!,
            Token = newToken
        };

        return dto;
    }
}