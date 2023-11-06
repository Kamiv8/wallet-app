using System.Buffers;
using System.Diagnostics;

namespace WalletApp.Domain.Common;

public class ApiResponse<T>
{
    public T? Response { get; set; }
}