namespace WalletApp.Application.Options;


public class JwtOptions
{
    public string Issuer { get; set; } = string.Empty;
    public string Audience { get; set; } = string.Empty;
    public string Secret { get; set; } = string.Empty;
    public int RefreshTokenTtl { get; set; }
    public int AccessTokenTtl { get; set; }
}