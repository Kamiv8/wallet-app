namespace WalletApp.API.Models.Users.Dto;

public class ResetPasswordDTO
{
    public string Password { get; set; }
    public string ConfirmPassword { get; set; }
}