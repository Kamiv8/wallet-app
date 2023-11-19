using FluentValidation;

namespace WalletApp.Application.Common.Category.CreateCategory;

public class CreateUserCategoryCommandValidation : AbstractValidator<CreateUserCategoryDto>
{
    public CreateUserCategoryCommandValidation()
    {
        RuleFor(x => x.Name).NotEmpty().MinimumLength(3).MaximumLength(50);
    }
}