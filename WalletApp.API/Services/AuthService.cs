using System.Text.Json;
using WalletApp.API.Entities;

namespace WalletApp.API.Services;

public interface IAuthService
{
    User? User { get; }
}

public class AuthService : IAuthService
{
    private readonly IHttpContextAccessor _accessor;

    public AuthService(IHttpContextAccessor accessor)
    {
        _accessor = accessor;
    }
    
    public User? User => (User?)_accessor.HttpContext!.Items["User"];
}