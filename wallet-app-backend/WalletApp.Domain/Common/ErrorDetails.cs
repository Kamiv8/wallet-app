using System.Net;

namespace WalletApp.Domain.Common;

public class ErrorDetails : Exception
{
    public ErrorDetails(): base() {}

    public ErrorDetails(string message): base(message)
    {
        
    }
    
    public ErrorDetails(IEnumerable<string> errorMessages)
    {
        ErrorMessages = errorMessages;
    }

    public IEnumerable<string> ErrorMessages { get; }
}