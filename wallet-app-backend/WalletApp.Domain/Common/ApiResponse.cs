using System.Buffers;
using System.Diagnostics;

namespace WalletApp.Domain.Common;

public class ApiResponse<T>
{
    public uint StatusCode { get; set; }
    public T? Response { get; set; }
}