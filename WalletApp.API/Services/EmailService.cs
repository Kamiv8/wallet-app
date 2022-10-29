using System.Net;
using System.Net.Mail;
using MailKit.Security;
using Microsoft.Extensions.Options;
using WalletApp.API.Helpers;

namespace WalletApp.API.Services;

public interface IEmailService
{
    void Send(string to, string subject, string html, string from = null);
}


public class EmailService : IEmailService
{
    private readonly AppSettings _appSettings;

    public EmailService(IOptions<AppSettings> appSettings)
    {
        _appSettings = appSettings.Value;
    }
    
    public void Send(string to, string subject, string html, string from = null)
    {
        var message = new MailMessage();
        message.From = new MailAddress(_appSettings.EmailFrom ?? from, "Wallet-app No-Reply");
        message.Subject = subject;
        message.IsBodyHtml = true;
        message.Body = html;
        message.To.Add(to);

        using var smtp = new SmtpClient();
        smtp.Host = _appSettings.SmtpHost;
        smtp.Port = _appSettings.SmtpPort;
        smtp.UseDefaultCredentials = false;
        smtp.Credentials = new NetworkCredential(_appSettings.SmtpUser, _appSettings.SmtpPass);
        smtp.Send(message);
    }
    
}