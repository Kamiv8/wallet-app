using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Infractructure.FileProvider.Models;

namespace WalletApp.Infractructure.FileProvider;

public class EmailTemplates : IEmailTemplates
{
    [Obsolete("Obsolete")]
    public EmailTemplateDto GetTemplate(EmailTemplate template)
    {
        return template switch
        {
            EmailTemplate.REGISTER => new EmailTemplateDto(EmailTemplate.REGISTER,
                GetTemplateByName(
                    @"C:\\Users\\maste\\source\\repos\\wallet-app\\emailTemplates\\register_template.txt")), // TODO change path 
            EmailTemplate.FORGOT_PASSWORD => new EmailTemplateDto(EmailTemplate.FORGOT_PASSWORD,
                GetTemplateByName(@"C:\\Users\\maste\\source\\repos\\wallet-app\\emailTemplates\\changeForgotPasswordTemplate.txt")),
            _ => new EmailTemplateDto(EmailTemplate.DEFAULT, DefaultTemplate())
        };
    }


    [Obsolete("Obsolete")]
    private static string GetTemplateByName(string path)
    {
        try
        {
            using var stream = new StreamReader(path);
            return stream.ReadToEnd();
        }
        catch (Exception e)
        {
            return DefaultTemplate();
        }
    }

    private static string DefaultTemplate()
    {
        return """<h1>Hello, {0}</h1><a href="http://localhost:3000/verify/{1}/{2}">Confirm register</a>""";
    }
}