using FluentValidation;

namespace WalletApp.Application.Common.Category.CreateUserCategory;

public class CreateUserCategoryCommandValidation : AbstractValidator<CreateUserCategoryCommand>
{
    public CreateUserCategoryCommandValidation()
    {
        RuleFor(x => x.Name).Cascade(CascadeMode.Stop).NotEmpty().MinimumLength(3)
            .MaximumLength(50);
    }
}