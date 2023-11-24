using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Token.RevokeRefreshToken;

public class
    RevokeRefreshTokenCommandHandler : ICommandHandler<RevokeRefreshTokenCommand>
{
    private readonly ITokenRepository _tokenRepository;
    private readonly ICurrentUserService _userService;
    private readonly IUnitOfWork _unitOfWork;

    public RevokeRefreshTokenCommandHandler(ITokenRepository tokenRepository,
        ICurrentUserService userService, IUnitOfWork unitOfWork)
    {
        _tokenRepository = tokenRepository;
        _userService = userService;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResult> Handle(RevokeRefreshTokenCommand request,
        CancellationToken cancellationToken)
    {
        var user = _userService?.Id;
        if (user is null) return ApiResult.Error(TokenErrorMessages.CannotFindUser);

        await _tokenRepository.RevokeToken((Guid)user);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return ApiResult.Success();
    }
}