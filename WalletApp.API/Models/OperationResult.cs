using WalletApp.API.Models.enums;

namespace WalletApp.API.Models;

public class OperationResult
{
    public OperationResultEnum Status { get; set; }
    public string? Message { get; set; }


    public static OperationResult Error(string message)
    {
        var error = new OperationResult()
        {
            Status = OperationResultEnum.ERROR,
            Message = message
        };
        return error;
    }

    public static OperationResult Success()
    {
        return new OperationResult()
        {
            Status = OperationResultEnum.SUCCESS
        };
    }
}


public class OperationResult<T>
{
    public T? Data { get; set; }
    public string Message { get; set; }
    public OperationResultEnum Status { get; set; }

    public static OperationResult<T> Error(string message, T? data)
    {
        return new OperationResult<T>
        {
            Data = data,
            Message = message,
            Status = OperationResultEnum.ERROR
        };
    }

    public static OperationResult<T> Success(T data)
    {
        return new OperationResult<T>
        {
            Data = data,
            Status = OperationResultEnum.SUCCESS
        };
    }

}