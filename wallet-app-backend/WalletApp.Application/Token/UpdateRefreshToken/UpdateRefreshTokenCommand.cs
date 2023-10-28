using MediatR;

namespace WalletApp.Application.Token.UpdateRefreshToken;

public class UpdateRefreshTokenCommand : IRequest<RefreshTokenDto>
{
    public string? RefreshToken { get; set; }
}