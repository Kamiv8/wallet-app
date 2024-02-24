
using WalletApp.Application.Enums;

namespace WalletApp.Infractructure.FileProvider.Models;

public record EmailTemplateDto(EmailTemplate EmailTemplateType, string Template);