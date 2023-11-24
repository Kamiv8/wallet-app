using System.Security.Cryptography;

namespace WalletApp.Infractructure.JWT;

public static class UniqueTokenGenerator
{
    public static string GetUniqueToken()
    {
        var token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));
        return token;
    }
}