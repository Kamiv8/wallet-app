using MediatR;
using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Category.UpdateUserCategory;

public class UpdateUserCategoryCommandHandler : ICommandHandler<UpdateUserCategoryCommand>
{
    private readonly ICategoryRepository _repository;

    public UpdateUserCategoryCommandHandler(ICategoryRepository repository)
    {
        _repository = repository;
    }

    public async Task<ApiResult> Handle(UpdateUserCategoryCommand request,
        CancellationToken cancellationToken)
    {
        var entityCategory = await _repository.GetUserCategoryById(request.Id, cancellationToken);

        if (entityCategory is null) return ApiResult.Error(CategoryErrorMessages.CategoryNotExist);

        entityCategory.Name = request.Name;

        await _repository.SaveAsync(cancellationToken);

        return ApiResult.Success();
    }
}