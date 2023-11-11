using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Options;
using WalletApp.Common.Helpers;
using WalletApp.Domain.Entities;

namespace WalletApp.Infrastructure.JWT;

public class JWTUtil : IJWTUtil
{
    private readonly JwtOptions _options;

    public JWTUtil(IOptions<JwtOptions> options)
    {
        _options = options.Value;
    }

    public string GenerateJwtToken(Account account)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.UTF8.GetBytes(_options.Secret);
        var claims = new Claim[]
        {
            new(JwtRegisteredClaimNames.Sub, account.Id.ToString()),
            new(JwtRegisteredClaimNames.Email, account.Email)
        };

        var signingCredentials = new SigningCredentials(
            new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);

        var tokenDescriptor = new JwtSecurityToken(
            _options.Issuer,
            _options.Audience,
            claims,
            null,
            DateTime.UtcNow.AddMinutes(_options.AccessTokenTtl),
            signingCredentials
        );
        var token = tokenHandler.WriteToken(tokenDescriptor);
        return token;
    }

    public Guid? ValidateJwtToken(string? token)
    {
        if (token is null) return null;

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_options.Secret);

        try
        {
            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ClockSkew = TimeSpan.Zero
            }, out SecurityToken validationToken);

            var jwtToken = (JwtSecurityToken)validationToken;
            var userId = Guid.Parse(jwtToken.Claims.FirstOrDefault(x => x.Type == "id")?.Value ??
                                    String.Empty);

            return userId == Guid.Empty ? null : userId;
        }
        catch
        {
            return null;
        }
    }

    public Token GenerateRefreshToken()
    {
        var refreshToken = new Token
        {
            RefreshToken = UniqueTokenGenerator.GetUniqueToken(),
            RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(_options.RefreshTokenTtl)
        };

        return refreshToken;
    }
}