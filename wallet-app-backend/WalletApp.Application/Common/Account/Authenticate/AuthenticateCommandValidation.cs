using FluentValidation;

namespace WalletApp.Application.Account.Authenticate;

public class AuthenticateCommandValidation : AbstractValidator<AuthenticateCommand>
{
    public AuthenticateCommandValidation()
    {
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.Password).NotEmpty().MinimumLength(8).MaximumLength(40);
    }
}