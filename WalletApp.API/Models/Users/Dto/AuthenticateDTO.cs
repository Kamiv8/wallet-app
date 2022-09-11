using System.ComponentModel.DataAnnotations;

namespace WalletApp.API.Models.Users.Dto;

public class AuthenticateDTO
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }
    
    [Required] 
    public string Password { get; set; }
}