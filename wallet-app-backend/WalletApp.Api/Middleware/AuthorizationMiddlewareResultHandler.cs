using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Policy;
using Newtonsoft.Json;
using WalletApp.Application.Common;
using WalletApp.Application.Consts;
using WalletApp.Application.Enums;

namespace WalletApp.Middleware;

public class AuthorizationMiddlewareResultHandler : IAuthorizationMiddlewareResultHandler
{
    private readonly Microsoft.AspNetCore.Authorization.Policy.AuthorizationMiddlewareResultHandler
        defaultHandler = new();

    public async Task HandleAsync(
        RequestDelegate next,
        HttpContext context,
        AuthorizationPolicy policy,
        PolicyAuthorizationResult authorizeResult)
    {
        if (authorizeResult.Forbidden
            && authorizeResult.AuthorizationFailure!.FailedRequirements
                .OfType<Show404Requirement>().Any())
        {
            // Return a 404 to make it appear as if the resource doesn't exist.
            context.Response.StatusCode = StatusCodes.Status403Forbidden;
            return;
        }

        if (authorizeResult.Challenged)
        {
            context.Response.StatusCode = StatusCodes.Status401Unauthorized;
            context.Response.ContentType = "application/json";
            var errorResponse = new ApiResult(ApiResultStatus.Unauthorized,
                CommonErrorMessages.Unauthorized);
            await context.Response.WriteAsync(JsonConvert.SerializeObject(errorResponse));
            return;
        }

        await defaultHandler.HandleAsync(next, context, policy, authorizeResult);
    }
}

public class Show404Requirement : IAuthorizationRequirement
{
}