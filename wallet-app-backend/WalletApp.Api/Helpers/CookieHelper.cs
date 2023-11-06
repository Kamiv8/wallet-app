using Microsoft.Extensions.Options;
using WalletApp.Application;
using WalletApp.Application.Interfaces;

namespace WalletApp.Common.Helpers;

public class CookieHelper : ICookieHelper
{
    private readonly IHttpContextAccessor  _response;
    private readonly JWTConfig _config;

    public CookieHelper(IHttpContextAccessor  response, IOptions<JWTConfig> config)
    {
        _response = response;
        _config = config.Value;
    }
    
    public void SetToken(string token)
    {
        var cookieOptions = new CookieOptions
        {
            HttpOnly = true,
            Expires = DateTimeOffset.UtcNow.AddDays(_config.RefreshTokenTTL)
        };
        _response.HttpContext.Response.Cookies.Append("refreshToken", token, cookieOptions);
    }
}