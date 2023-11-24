using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Common;
using WalletApp.Application.Enums;

namespace WalletApp.Controllers;

[ApiController]
public abstract class BaseController : ControllerBase
{
    protected ActionResult<ApiResult<T>> CreateResponse<T>(ApiResult<T>? actionResult)
    {
        return actionResult switch
        {
            { Status: ApiResultStatus.Error } => NotFound(actionResult),
            { Status: ApiResultStatus.Success } => Ok(actionResult),
            _ => throw new ArgumentOutOfRangeException("actionResult.Status", actionResult.Status,
                $"Unknown value of {nameof(ApiResultStatus)}")
        };
    }

    protected ActionResult<ApiResult> CreateResponse(ApiResult? actionResult)
    {
        return actionResult switch
        {
            { Status: ApiResultStatus.Error } => NotFound(actionResult),
            { Status: ApiResultStatus.NoContent } => NoContent(),
            { Status: ApiResultStatus.Success } => Ok(actionResult),
            _ => throw new ArgumentOutOfRangeException("actionResult.Status", actionResult.Status,
                $"Unknown value of {nameof(ApiResultStatus)}")
        };
    }

    protected string IpAddress()
    {
        if (Request.Headers.ContainsKey("X-Forwarded-For"))
            return Request.Headers["X-Forwarded-For"];
        return HttpContext.Connection.RemoteIpAddress?.MapToIPv4().ToString();
    }
}