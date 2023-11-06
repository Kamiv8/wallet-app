using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WalletApp.Application;
using WalletApp.Application.Interfaces;
using WalletApp.Common.Helpers;
using WalletApp.Domain.Entities;

namespace WalletApp.Infrastructure.JWT;

public class JWTUtil : IJWTUtil
{
    private readonly JWTConfig _options;

    public JWTUtil(IOptions<JWTConfig> options)
    {
        _options = options.Value;
    }
    
    public string GenerateJwtToken(Account account)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_options.Secret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[] { new Claim("id", account.Id.ToString()) }),
            Expires = DateTime.UtcNow.AddMinutes(1),
            SigningCredentials =
                new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
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
           var userId = Guid.Parse(jwtToken.Claims.FirstOrDefault(x => x.Type == "id")?.Value ?? String.Empty);

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
            RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(7)
        };

        return refreshToken;
    }
    
}