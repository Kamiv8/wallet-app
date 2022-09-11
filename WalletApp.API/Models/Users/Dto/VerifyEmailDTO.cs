using System.ComponentModel.DataAnnotations;

namespace WalletApp.API.Models.Users.Dto;

public class VerifyEmailDTO
{
    [Required]
    public string Token { get; set; }
}