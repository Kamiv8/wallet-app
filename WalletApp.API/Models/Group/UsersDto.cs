using WalletApp.API.Models.enums;

namespace WalletApp.API.Models;

public class UsersDto
{
    public Guid Id { get; set; }
    public Role? Role { get; set; }
    public string Username { get; set; }
}