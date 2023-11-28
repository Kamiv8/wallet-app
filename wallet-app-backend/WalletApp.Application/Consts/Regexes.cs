namespace WalletApp.Application.Consts;

public static class Regexes
{
    public const string PasswordRegex = @"^(?=.*[^a-zA-Z0-9])(?=.*\d)(?=.*[A-Z]).+$";
}