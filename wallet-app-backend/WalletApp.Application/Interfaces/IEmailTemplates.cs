using WalletApp.Application.Enums;
using WalletApp.Infractructure.FileProvider.Models;

namespace WalletApp.Application.Interfaces;

public interface IEmailTemplates
{
    EmailTemplateDto GetTemplate(EmailTemplate template);
}