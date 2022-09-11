namespace WalletApp.API.Models.Users.Dto;

public class RegisteredDTO
{
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string ConfirmPassword { get; set; }
    public int IconId { get; set; }
    public bool AcceptTerms { get; set; }
}