using WalletApp.Application.Interfaces;
using WalletApp.Domain.Entities;

namespace WalletApp.Services;

public class CurrentUserService : ICurrentUserService
{
    private readonly IHttpContextAccessor _accessor;

    public CurrentUserService(IHttpContextAccessor accessor)
    {
        _accessor = accessor;
    }

    public Account? Account => (Account?)_accessor.HttpContext!.Items["User"] ?? null;

}