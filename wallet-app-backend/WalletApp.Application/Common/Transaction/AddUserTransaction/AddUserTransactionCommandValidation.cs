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
        RuleFor(x => x.Price).NotEmpty().GreaterThanOrEqualTo(0).PrecisionScale(15, 2, false);
        RuleFor(x => x.Date).NotEmpty().LessThanOrEqualTo(DateTime.Today);
        RuleFor(x => x.CurrencyId).NotEmpty();
        RuleFor(x => x.CategoryId).NotEmpty();
        When(x => x.IsDefault, () =>
        {
            RuleFor(x => x.TextColor).NotEmpty().Matches(HexColorRegex);
            RuleFor(x => x.BackgroundColor).NotEmpty().Matches(HexColorRegex);
        }).Otherwise(() =>
        {
            RuleFor(x => x.TextColor).Null();
            RuleFor(x => x.BackgroundColor).Null();
        });
    }
}