
using FluentValidation;

namespace WalletApp.Application.Account.Register;

public class RegisterCommandValidation : AbstractValidator<RegisterCommand>
{
    public RegisterCommandValidation()
    {
        RuleFor(x => x.Username).NotEmpty().MinimumLength(3).MaximumLength(40);
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.Password).NotEmpty().MinimumLength(8).MaximumLength(40);
        RuleFor(x => x.ConfirmPassword).Equal(x => x.Password).NotEmpty().MinimumLength(8).MaximumLength(40);
        RuleFor(x => x.IconType).NotEmpty();
    }
}