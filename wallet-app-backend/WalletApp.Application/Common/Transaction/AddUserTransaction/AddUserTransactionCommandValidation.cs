using FluentValidation;
using WalletApp.Application.Account.Authenticate;

namespace WalletApp.Application.Common.Transaction.AddUserTransaction;

public class AddUserTransactionCommandValidation : AbstractValidator<AddUserTransactionCommand>
{
    private const string HexColorRegex = @"^#(?:[0-9a-fA-F]{3}){1,2}$";

    public AddUserTransactionCommandValidation()
    {
        RuleFor(x => x.Title).Cascade(CascadeMode.Stop)
            .NotEmpty().MinimumLength(3)
            .MaximumLength(50);
        RuleFor(x => x.Price).Cascade(CascadeMode.Stop).NotEmpty()
            .PrecisionScale(15, 2, false);
        RuleFor(x => x.Date).Cascade(CascadeMode.Stop).NotEmpty().LessThanOrEqualTo(DateTime.Today);
        RuleFor(x => x.CurrencyId).Cascade(CascadeMode.Stop).NotEmpty();
        RuleFor(x => x.CategoryId).Cascade(CascadeMode.Stop).NotEmpty();
        RuleFor(x => x.Description).Cascade(CascadeMode.Stop).MinimumLength(1).MaximumLength(500);
        When(x => x.IsDefault, () =>
        {
            RuleFor(x => x.TextColor).Cascade(CascadeMode.Stop).NotEmpty().Matches(HexColorRegex);
            RuleFor(x => x.BackgroundColor).Cascade(CascadeMode.Stop).NotEmpty()
                .Matches(HexColorRegex);
        }).Otherwise(() =>
        {
            RuleFor(x => x.TextColor).Null();
            RuleFor(x => x.BackgroundColor).Null();
        });
    }
}