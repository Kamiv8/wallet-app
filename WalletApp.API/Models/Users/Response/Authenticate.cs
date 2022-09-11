using System.Text.Json.Serialization;

namespace WalletApp.API.Models.Users.Response;

public class Authenticate
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public DateTime Created { get; set; }
    public DateTime? Updated { get; set; }
    public bool IsVerified { get; set; }
    public string JwtToken { get; set; }
    [JsonIgnore]
    public string RefreshToken { get; set; }
}