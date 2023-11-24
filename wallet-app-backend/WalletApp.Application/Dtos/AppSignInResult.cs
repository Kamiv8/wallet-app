namespace WalletApp.Application.Dtos;

public sealed record AppSignInResult(bool Succeeded, bool IsLockedOut, bool IsNotAllowed,
    bool RequiresTwoFactor);