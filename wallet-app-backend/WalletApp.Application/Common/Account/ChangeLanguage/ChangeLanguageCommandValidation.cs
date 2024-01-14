using FluentValidation;

namespace WalletApp.Application.Common.Account.ChangeLanguage;

public class ChangeLanguageCommandValidation : AbstractValidator<ChangeLanguageCommand>
{

    public ChangeLanguageCommandValidation()
    {
        RuleFor(x => x.Language).Cascade(CascadeMode.Stop).NotEmpty().IsInEnum();
    }
}