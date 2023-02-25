namespace WalletApp.API.Models.Users.Dto;

public class ChangeUserPasswordDto
{
    public string OldPassword { get; set; }
    public string NewPassword { get; set; }
    public string ConfirmNewPassword { get; set; }
}