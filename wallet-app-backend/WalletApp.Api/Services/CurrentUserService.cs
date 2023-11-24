using System.Security.Claims;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;

namespace WalletApp.Services;

public class CurrentUserService : ICurrentUserService
{
    private readonly IHttpContextAccessor _accessor;

    public CurrentUserService(IHttpContextAccessor accessor)
    {
        _accessor = accessor;
    }

    public Guid Id
    {
        get
        {
            var userIdClaim = _accessor.HttpContext?.User.FindFirst(ClaimTypes.NameIdentifier);

            return userIdClaim?.Value is not null
                ? Guid.Parse(userIdClaim.Value)
                : Guid.Empty;
        }
    }

    public string? Email => _accessor.HttpContext!.User.FindFirstValue(ClaimTypes.Email);
}