using System.Security.Claims;
using WalletApp.Application.Interfaces;

namespace WalletApp.Services;

public class CurrentUserService : ICurrentUserService
{
    private readonly IHttpContextAccessor _accessor;

    public CurrentUserService(IHttpContextAccessor accessor)
    {
        _accessor = accessor;
    }

    public Guid? Id =>
        _accessor.HttpContext?.User.FindFirst(ClaimTypes.NameIdentifier) is not null
            ? Guid.Parse(_accessor.HttpContext?.User.FindFirst(ClaimTypes.NameIdentifier)!.Value!)
            : null;

    public string? Email => _accessor.HttpContext!.User.FindFirstValue(ClaimTypes.Email);
}