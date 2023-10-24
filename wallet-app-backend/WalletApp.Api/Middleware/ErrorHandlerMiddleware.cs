using System.Net;
using System.Text.Json;
using WalletApp.Domain.Common;
using FluentValidation;

namespace WalletApp.Middleware;

public class ErrorHandlerMiddleware
{
    private readonly RequestDelegate _next;

    public ErrorHandlerMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (ValidationException e)
        {
            await HandleValidationExceptionAsync(httpContext, e);
        }
        catch (Exception e)
        {
            await HandleExceptionAsync(httpContext, e);
        }
    }


    private async Task HandleValidationExceptionAsync(HttpContext context, ValidationException ex)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)HttpStatusCode.BadRequest;


        var errorMessages = ex.Errors.Select(x => x.ErrorMessage).ToList();
        var error = new ErrorDetails(errorMessages);

        
        await context.Response.WriteAsync(JsonSerializer.Serialize(error.ErrorMessages));
    }
    private async Task HandleExceptionAsync(HttpContext context, Exception ex)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        var error = new ErrorDetails(ex.Message);
        
        await context.Response.WriteAsync(JsonSerializer.Serialize(error));
    }
}


public static class ErrorMiddlewareExtension
{
    public static IApplicationBuilder UseErrorMiddleware(this IApplicationBuilder builder)
    {
       return builder.UseMiddleware<ErrorHandlerMiddleware>();
    }
}