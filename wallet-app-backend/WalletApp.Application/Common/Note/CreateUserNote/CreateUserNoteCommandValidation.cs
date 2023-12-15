using FluentValidation;
using WalletApp.Application.Consts;
namespace WalletApp.Application.Common.Note.CreateUserNote;

public class CreateUserNoteCommandValidation : AbstractValidator<CreateUserNoteCommand>
{
    public CreateUserNoteCommandValidation()
    {
        RuleFor(x => x.Title).Cascade(CascadeMode.Stop).NotEmpty().MinimumLength(1)
            .MaximumLength(50);
        RuleFor(x => x.Text).Cascade(CascadeMode.Stop).NotEmpty().MinimumLength(1)
            .MaximumLength(500);
        RuleFor(x => x.TextColor).Cascade(CascadeMode.Stop).NotEmpty()
            .Matches(Regexes.HexColorRegex);
        RuleFor(x => x.BackgroundColor).Cascade(CascadeMode.Stop).NotEmpty()
            .Matches(Regexes.HexColorRegex);
    }
}