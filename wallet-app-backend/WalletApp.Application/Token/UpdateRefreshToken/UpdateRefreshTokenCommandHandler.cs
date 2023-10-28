using MediatR;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Common;

namespace WalletApp.Application.Token.UpdateRefreshToken;

public class UpdateRefreshTokenCommandHandler : IRequestHandler<UpdateRefreshTokenCommand, RefreshTokenDto>
{
    private readonly IAccountRepository _accountRepository;
    private readonly ITokenRepository _tokenRepository;
    private readonly IJWTUtil _jwtUtil;

    public UpdateRefreshTokenCommandHandler(IAccountRepository accountRepository, ITokenRepository tokenRepository, IJWTUtil jwtUtil)
    {
        _accountRepository = accountRepository;
        _tokenRepository = tokenRepository;
        _jwtUtil = jwtUtil;
    }
    
    public async Task<RefreshTokenDto> Handle(UpdateRefreshTokenCommand request, CancellationToken cancellationToken)
    {
        if (request.RefreshToken is null)
            throw new ErrorDetails("The token is empty");
        var user = await _accountRepository.GetAccountByRefreshToken(request.RefreshToken);

        if (user is null)
            throw new ErrorDetails("Invalid token");

        if (user.Token.RefreshTokenExpiryTime <= DateTime.Now)
            throw new ErrorDetails("This provided token is invalid");

        var newRefreshToken = _jwtUtil.GenerateRefreshToken();
        var entityToken = await _tokenRepository.GetTokenByUserId(user.Id);
        entityToken.RefreshToken = newRefreshToken.RefreshToken;
        entityToken.RefreshTokenExpiryTime = newRefreshToken.RefreshTokenExpiryTime;
        _tokenRepository.UpdateRefreshToken(entityToken);
        await _tokenRepository.Save(cancellationToken);

        var jwtToken = _jwtUtil.GenerateJwtToken(user);

        var response = new RefreshTokenDto()
        {
            JwtToken = jwtToken,
            RefreshToken = newRefreshToken.RefreshToken
        };

        return response;
    }
}