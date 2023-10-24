using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Middleware;

public class JwtMiddleware
{
    private readonly RequestDelegate _next;

    public JwtMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context, IAccountRepository repository, IJWTUtil jwtUtil)
    {
        var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split().Last();
        var userId = jwtUtil.ValidateJwtToken(token);
        if (userId is not null)
        {
            context.Items["User"] = repository.GetAccountById(userId.Value);
        }

        await _next(context);
    }
}

public static class JwtMiddlewareExtension
{
    public static IApplicationBuilder UseJwtMiddleware(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<JwtMiddleware>();
    }
}