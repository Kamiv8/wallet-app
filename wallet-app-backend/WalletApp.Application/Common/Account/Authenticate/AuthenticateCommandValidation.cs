using FluentValidation;

namespace WalletApp.Application.Account.Authenticate;

public class AuthenticateCommandValidation : AbstractValidator<AuthenticateCommand>
{
    public AuthenticateCommandValidation()
    {
        RuleFor(x => x.Username).NotEmpty().MinimumLength(3).MaximumLength(40);
        RuleFor(x => x.Password).NotEmpty().MinimumLength(8).MaximumLength(40);
    }
}