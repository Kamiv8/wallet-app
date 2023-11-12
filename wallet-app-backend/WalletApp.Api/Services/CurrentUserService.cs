using System.Security.Claims;
using Microsoft.IdentityModel.JsonWebTokens;
using WalletApp.Application.Interfaces;

namespace WalletApp.Services;

public class CurrentUserService : ICurrentUserService
{
    private readonly IHttpContextAccessor _accessor;

    public CurrentUserService(IHttpContextAccessor accessor)
    {
        _accessor = accessor;
    }

    public Guid? Id => _accessor.HttpContext?.User?.FindFirstValue(JwtRegisteredClaimNames.Sub) != null
        ? Guid.Parse(_accessor.HttpContext?.User?.FindFirstValue(JwtRegisteredClaimNames.Sub)!)
        : null;

    public string? Email => _accessor.HttpContext!.User.FindFirstValue(ClaimTypes.Email);
}