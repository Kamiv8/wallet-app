using Microsoft.Extensions.Options;
using WalletApp.API.Helpers;

namespace WalletApp.API.Authorization;

public class JwtMiddleware
{
    private readonly RequestDelegate _next;
    private readonly AppSettings _appSettings;

    public JwtMiddleware(RequestDelegate next, IOptions<AppSettings> appSettings)
    {
        _next = next;
        _appSettings = appSettings.Value;
    }

    public async Task Invoke(HttpContext context, DataContext dataContext, IJwtUtils jwtUtils)
    {
        var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
        var userData = jwtUtils.ValidateJwtToken(token);
        if (userData != null)
        {
            context.Items["User"] = await dataContext.Users.FindAsync(userData.userId);
        }

        await _next(context);
    }
    
}