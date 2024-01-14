
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces;

public interface IJWTUtil
{
    Task<string> GenerateJwtToken(UserIdentity account);
    Token GenerateRefreshToken(string ipAddress);
}