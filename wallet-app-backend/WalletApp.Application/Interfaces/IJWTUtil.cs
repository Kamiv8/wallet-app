
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces;

public interface IJWTUtil
{
    string GenerateJwtToken(Domain.Entities.Account account);
    Guid? ValidateJwtToken(string? token);
    Domain.Entities.Token GenerateRefreshToken();
}