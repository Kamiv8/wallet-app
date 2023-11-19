using MediatR;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Category.DeleteUserCategory;

public class DeleteUserCategoryCommandHandler : IRequestHandler<DeleteUserCategoryCommand, ApiResult>
{
    private readonly ICategoryRepository _repository;

    public DeleteUserCategoryCommandHandler(ICategoryRepository repository)
    {
        _repository = repository;
    }
    
    public async Task<ApiResult> Handle(DeleteUserCategoryCommand request, CancellationToken cancellationToken)
    {
        var category = await _repository.GetUserCategoryById(request.CategoryId, cancellationToken);

        if (category is null) return ApiResult.Error(CategoryErrorMessages.CategoryNotExist);
        
        _repository.DeleteUserCategory(category);
        await _repository.SaveAsync(cancellationToken);

        return ApiResult.Success();
    }
}