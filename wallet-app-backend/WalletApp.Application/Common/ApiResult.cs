using WalletApp.Application.Enums;

namespace WalletApp.Application.Common;

public sealed record ApiResult<T>(ApiResultStatus Status, T? Data, string? message);
public sealed record ApiResult(ApiResultStatus Status, string? message);
