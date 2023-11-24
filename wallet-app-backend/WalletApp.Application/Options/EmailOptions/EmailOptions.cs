namespace WalletApp.Application.Options.EmailOptions;

public class EmailOptions
{
    public string SecretKey { get; set; } = string.Empty;
    public string ApiKey { get; set; } = string.Empty;
    public int SmtpPort { get; set; }
    public string SmtpServer { get; set; } = string.Empty;
    public string FromEmail { get; set; } = string.Empty;
    public string FromName { get; set; } = string.Empty;
}