using Microsoft.Extensions.Options;
using WalletApp.Application;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Options;

namespace WalletApp.Common.Helpers;

public class CookieHelper : ICookieHelper
{
    private readonly IHttpContextAccessor _response;
    private readonly JwtOptions _config;

    public CookieHelper(IHttpContextAccessor response, IOptions<JwtOptions> config)
    {
        _response = response;
        _config = config.Value;
    }

    public void SetToken(string? token)
    {
        if (token is null) return;

        var cookieOptions = new CookieOptions
        {
            HttpOnly = true,
            Expires = DateTimeOffset.UtcNow.AddDays(_config.RefreshTokenTtl)
        };
        _response.HttpContext.Response.Cookies.Append("refreshToken", token, cookieOptions);
    }
}