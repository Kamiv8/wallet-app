using FluentValidation;
using WalletApp.Application.Consts;

namespace WalletApp.Application.Common.Settings.ChangePassword;

public class ChangePasswordCommandValidation : AbstractValidator<ChangePasswordCommand>
{
    public ChangePasswordCommandValidation()
    {
        RuleFor(x => x.OldPassword).Cascade(CascadeMode.Stop).NotEmpty().MinimumLength(8)
            .MaximumLength(40).Matches(Regexes.PasswordRegex);
        RuleFor(x => x.NewPassword).Cascade(CascadeMode.Stop).NotEmpty().MinimumLength(8)
            .MaximumLength(40).Matches(Regexes.PasswordRegex);
    }
}