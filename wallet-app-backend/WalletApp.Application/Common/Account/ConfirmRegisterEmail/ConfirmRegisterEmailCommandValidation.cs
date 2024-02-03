using FluentValidation;

namespace WalletApp.Application.Common.Account.ConfirmRegisterEmail;

public class ConfirmRegisterEmailCommandValidation : AbstractValidator<ConfirmRegisterEmailCommand>
{
    public ConfirmRegisterEmailCommandValidation()
    {
        RuleFor(x => x.Token).Cascade(CascadeMode.Stop).NotEmpty().MinimumLength(6);
        RuleFor(x => x.Email).Cascade(CascadeMode.Stop).NotEmpty().EmailAddress();
    }
}