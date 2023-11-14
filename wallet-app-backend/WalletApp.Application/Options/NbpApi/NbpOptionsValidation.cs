using FluentValidation;

namespace WalletApp.Application.Options.NbpApi;

public class NbpOptionsValidation : AbstractValidator<NbpOptions>
{
    public NbpOptionsValidation()
    {
        RuleFor(x => x.BaseUrl).NotEmpty();
    }
}