using FluentValidation;

namespace WalletApp.Application.Common.Account.ForgotPassword;

public class ForgotPasswordCommandValidation : AbstractValidator<ForgotPasswordCommand>
{
    public ForgotPasswordCommandValidation()
    {
        RuleFor(x => x.Email).Cascade(CascadeMode.Stop).NotEmpty().EmailAddress();
    }
}