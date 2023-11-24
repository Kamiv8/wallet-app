using FluentValidation;

namespace WalletApp.Application.Options.EmailOptions;

public class EmailOptionsValidation : AbstractValidator<EmailOptions>
{
    public EmailOptionsValidation()
    {
        RuleFor(x => x.SecretKey).NotEmpty();
        RuleFor(x => x.ApiKey).NotEmpty();
        RuleFor(x => x.SmtpPort).NotEmpty();
        RuleFor(x => x.SmtpServer).NotEmpty();
        RuleFor(x => x.FromEmail).NotEmpty();
        RuleFor(x => x.FromName).NotEmpty();
    }
}