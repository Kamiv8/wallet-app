using FluentValidation;

namespace WalletApp.Application.Common.Account.Authenticate;

public class AuthenticateCommandValidation : AbstractValidator<AuthenticateCommand>
{
    public AuthenticateCommandValidation()
    {
        RuleFor(x => x.Username).Cascade(CascadeMode.Stop).NotEmpty().MinimumLength(3).MaximumLength(40);
        RuleFor(x => x.Password).Cascade(CascadeMode.Stop).NotEmpty().MinimumLength(8).MaximumLength(40);
    }
}