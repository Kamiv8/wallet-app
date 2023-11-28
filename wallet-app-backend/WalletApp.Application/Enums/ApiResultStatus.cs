using System.Net;

namespace WalletApp.Application.Enums;

public enum ApiResultStatus
{
    Success = HttpStatusCode.OK,
    Error = HttpStatusCode.NotFound,
    Unauthorized = HttpStatusCode.Unauthorized,
    NoContent = HttpStatusCode.NoContent,
    BadRequest = HttpStatusCode.BadRequest
}