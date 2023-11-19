using MediatR;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces.Repository;
using DomainCategory = WalletApp.Domain.Entities.Category;

namespace WalletApp.Application.Common.Category.CreateCategory;

public class
    CreateUserCategoryCommandHandler : IRequestHandler<CreateUserCategoryCommand, ApiResult>
{
    private readonly ICategoryRepository _repository;

    public CreateUserCategoryCommandHandler(ICategoryRepository repository)
    {
        _repository = repository;
    }

    public async Task<ApiResult> Handle(CreateUserCategoryCommand request,
        CancellationToken cancellationToken)
    {
        var newCategory = new DomainCategory
        {
            UserIdentityId = request.UserId,
            Name = request.Name
        };

        var categoryIsExist = await _repository.GetUserCategoryByName(request.UserId, request.Name, cancellationToken);

        if (categoryIsExist is not null)
            return ApiResult.Error(CategoryErrorMessages.CategoryExist);

        await _repository.CreateCategory(newCategory, cancellationToken);

        await _repository.SaveAsync(cancellationToken);

        return ApiResult.Success();
    }
}