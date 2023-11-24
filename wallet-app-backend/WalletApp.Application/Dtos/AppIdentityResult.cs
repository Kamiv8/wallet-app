namespace WalletApp.Application.Dtos;

public class AppIdentityResult
{
    public bool Succeeded { get; set; }
    public IEnumerable<AppIdentityError>? Errors { get; set; }
}


public sealed record AppIdentityError(string Code, string Description);
