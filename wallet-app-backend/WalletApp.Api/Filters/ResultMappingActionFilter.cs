using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using WalletApp.Domain.Common;

namespace WalletApp.Filters;

public class ResultMappingActionFilter : IAsyncActionFilter
{

    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
       var newContext = await next();

        if (newContext.Result is OkObjectResult objectResult)
        {
            var apiResult = new ApiResponse<object>()
            {
                StatusCode = (uint?)objectResult.StatusCode ?? (uint)200,
                Response = objectResult.Value
            };

            newContext.Result = new ObjectResult(apiResult);
        }
    }
}