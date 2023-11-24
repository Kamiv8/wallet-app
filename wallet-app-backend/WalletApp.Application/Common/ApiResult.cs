using WalletApp.Application.Enums;

namespace WalletApp.Application.Common;

public class ApiResult
{
    public ApiResultStatus Status { get; }
    public string? Message { get; }


    public ApiResult(ApiResultStatus status, string? message = null)
    {
        Status = status;
        Message = message;
    }

    public static ApiResult Success(string message)
    {
        return new ApiResult(ApiResultStatus.Success, message);
    }
    
    public static ApiResult Success()
    {
        return new ApiResult(ApiResultStatus.Success);
    }

    public static ApiResult NoContent()
    {
        return new ApiResult(ApiResultStatus.NoContent);
    }

    public static ApiResult Error(string? message = null)
    {
        return new ApiResult(ApiResultStatus.Error, message);
    }
}

public class ApiResult<T>
{
    public ApiResultStatus Status { get; }
    public string? Message { get; }
    public T? Data { get; }


    public ApiResult(ApiResultStatus status,T? data, string? message = null)
    {
        Status = status;
        Data = data;
        Message = message;
    }

    public static ApiResult<T> Success(T? data)
    {
        return new ApiResult<T>(ApiResultStatus.Success, data);
    }

    public static ApiResult<T> Error(string? message = null)
    {
        return new ApiResult<T>(ApiResultStatus.Error, default, message);
    }
}
