namespace WalletApp.Application.Account.Authenticate;

public sealed record AuthenticateResponseDto(string Token, string RefreshToken);