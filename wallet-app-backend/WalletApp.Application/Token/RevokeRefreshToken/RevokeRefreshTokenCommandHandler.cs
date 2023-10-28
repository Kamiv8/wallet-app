using MediatR;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Common;

namespace WalletApp.Application.Token.RevokeRefreshToken;

public class RevokeRefreshTokenCommandHandler : IRequestHandler<RevokeRefreshTokenCommand>
{
    private readonly ITokenRepository _tokenRepository;
    private readonly ICurrentUserService _userService;

    public RevokeRefreshTokenCommandHandler(ITokenRepository tokenRepository, ICurrentUserService userService)
    {
        _tokenRepository = tokenRepository;
        _userService = userService;
    }
    
    
    public Task Handle(RevokeRefreshTokenCommand request, CancellationToken cancellationToken)
    {
        var user = _userService.Account?.Id;
        if (user is null) throw new ErrorDetails("Cannot find user");
    
        _tokenRepository.RevokeToken((Guid)user);
        _tokenRepository.Save(cancellationToken);
        
        return Task.CompletedTask;
    }
}