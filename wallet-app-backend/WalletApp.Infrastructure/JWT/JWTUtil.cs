using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Options;
using WalletApp.Domain.Entities;

namespace WalletApp.Infractructure.JWT;

public class JWTUtil : IJWTUtil
{
    private readonly UserManager<UserIdentity> _userManager;
    private readonly JwtOptions _options;

    public JWTUtil(IOptions<JwtOptions> options, UserManager<UserIdentity> userManager)
    {
        _userManager = userManager;
        _options = options.Value;
    }

    public async Task<string> GenerateJwtToken(UserIdentity account)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.UTF8.GetBytes(_options.Secret);
        var accountRoles = await _userManager.GetRolesAsync(account);
        var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Sub, account.Id.ToString()),
            new(JwtRegisteredClaimNames.Email, account.Email ?? string.Empty)
        };
        claims.AddRange(accountRoles.Select(role => new Claim(ClaimTypes.Role, role)));

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

    public Token GenerateRefreshToken(string ipAddress)
    {
        var refreshToken = new Token
        {
            RefreshToken = UniqueTokenGenerator.GetUniqueToken(),
            RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(_options.RefreshTokenTtl),
            IpAddress = ipAddress
        };

        return refreshToken;
    }
}