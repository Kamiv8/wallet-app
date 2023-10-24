namespace WalletApp.Application;

public class JWTConfig
{
    public string Secret { get; set; }
    public int RefreshTokenTTL { get; set; }
}