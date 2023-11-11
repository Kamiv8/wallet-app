using FluentValidation;

namespace WalletApp.Application.Options;

public class JwtOptionsValidation : AbstractValidator<JwtOptions>
{
    public JwtOptionsValidation()
    {
        RuleFor(x => x.Secret).NotEmpty();
        RuleFor(x => x.AccessTokenTtl).NotEmpty();
        RuleFor(x => x.RefreshTokenTtl).NotEmpty();
        RuleFor(x => x.Issuer).NotEmpty();
        RuleFor(x => x.Audience).NotEmpty();
    }
}