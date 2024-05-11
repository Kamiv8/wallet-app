using FluentValidation;
using WalletApp.Domain.Enums;

namespace WalletApp.Application.Common.Settings.ChangeDateRange;

public class ChangeDateRangeCommandValidation : AbstractValidator<ChangeDateRangeCommand>
{
    public ChangeDateRangeCommandValidation()
    {
        When(x => x.Option == DateRangeOption.CUSTOM_DAY, () =>
        {
            RuleFor(x => x.CustomDay).Cascade(CascadeMode.Stop).GreaterThan(0).LessThanOrEqualTo(28);
            RuleFor(x => x.CustomDate).Cascade(CascadeMode.Stop).Empty();
        }).Otherwise(() =>
        {
            RuleFor(x => x.CustomDay).Cascade(CascadeMode.Stop).Empty();
            RuleFor(x => x.CustomDate).Cascade(CascadeMode.Stop).NotEmpty();
        });
        
    }
}