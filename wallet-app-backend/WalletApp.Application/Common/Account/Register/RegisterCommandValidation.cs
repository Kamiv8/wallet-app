using FluentValidation;
using WalletApp.Application.Consts;

namespace WalletApp.Application.Common.Account.Register;

public class RegisterCommandValidation : AbstractValidator<RegisterCommand>
{
    public RegisterCommandValidation()
    {
        RuleFor(x => x.Username)
            .Cascade(CascadeMode.Stop)
            .NotEmpty()
            .MinimumLength(3)
            .MaximumLength(40);
        
        RuleFor(x => x.Email)
            .Cascade(CascadeMode.Stop)
            .NotEmpty()
            .EmailAddress();
        
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
        
        RuleFor(x => x.IconType)
            .Cascade(CascadeMode.Stop)
            .NotEmpty();
    }
}