using FluentValidation;
using WalletApp.Application.Consts;

namespace WalletApp.Application.Common.Account.ChangeForgotPassword;

public class ChangeForgotPasswordCommandValidation : AbstractValidator<ChangeForgotPasswordCommand>
{
    public ChangeForgotPasswordCommandValidation()
    {
        RuleFor(x => x.Token).NotEmpty();
        
        RuleFor(x => x.Password)
            .Cascade(CascadeMode.Stop)
            .NotEmpty()
            .MinimumLength(8)
            .MaximumLength(40)
            .Matches(Regexes.PasswordRegex);
        
        RuleFor(x => x.ConfirmPassword)
            .Cascade(CascadeMode.Stop)
            .Equal(x => x.Password)
            .NotEmpty()
            .MinimumLength(8)
            .MaximumLength(40)
            .Matches(Regexes.PasswordRegex);
    }
}