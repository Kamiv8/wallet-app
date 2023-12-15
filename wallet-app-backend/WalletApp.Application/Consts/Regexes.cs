namespace WalletApp.Application.Consts;

public static class Regexes
{
    public const string PasswordRegex = @"^(?=.*[^a-zA-Z0-9])(?=.*\d)(?=.*[A-Z]).+$";
    public const string HexColorRegex = @"^#(?:[0-9a-fA-F]{3}){1,2}$";
}