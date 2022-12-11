using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WalletApp.API.Entities;
using WalletApp.API.Helpers;

namespace WalletApp.API.Authorization;


public interface IJwtUtils
{
    public string GenerateJwtToken(User user);
    public Guid? ValidateJwtToken(string token);
    public RefreshToken GenerateRefreshToken(string ipAddress);
}

public class JwtUtils: IJwtUtils
{
    private readonly DataContext _dataContext;
    private readonly AppSettings _appSettings;

    public JwtUtils(DataContext dataContext, IOptions<AppSettings> appSettings)
    {
        _dataContext = dataContext;
        _appSettings = appSettings.Value;
    }
    
    public string GenerateJwtToken(User user)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim("id", user.Id.ToString())
            }),
            Expires = DateTime.UtcNow.AddMinutes(15),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);

    }
    
    public Guid? ValidateJwtToken(string token)
    {
        if (token == null) return null;

        var tokenHandler = new JwtSecurityTokenHandler();

        var key = Encoding.ASCII.GetBytes(_appSettings.Secret);

        try
        {
            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
            }, out SecurityToken validatedToken);

            var jwtToken = (JwtSecurityToken) validatedToken;
            var userId = Guid.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);
            return userId;

        }
        catch
        {
            return null;
        }

    }

    public RefreshToken GenerateRefreshToken(string ipAddress)
    {
        var refreshToken = new RefreshToken
        {
            Token = Convert.ToHexString(RandomNumberGenerator.GetBytes(64)),
            Expires = DateTime.UtcNow.AddDays(14),
            Created = DateTime.UtcNow,
            CreatedByIp = ipAddress
        };

        var tokenIsUnique = !_dataContext.Users.Any(u => u.RefreshTokens.Any(r => r.Token == refreshToken.Token));

        if (!tokenIsUnique) return GenerateRefreshToken(ipAddress);

        return refreshToken;
    }
}