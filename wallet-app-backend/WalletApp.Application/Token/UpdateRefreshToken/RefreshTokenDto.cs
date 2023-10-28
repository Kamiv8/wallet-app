namespace WalletApp.Application.Token.UpdateRefreshToken;

public class RefreshTokenDto
{
    public string JwtToken { get; set; }
    public string RefreshToken { get; set; }
}