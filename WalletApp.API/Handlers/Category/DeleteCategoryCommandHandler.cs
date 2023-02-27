using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Category;

namespace WalletApp.API.Handlers.Category;

public class DeleteCategoryCommandHandler : IRequestHandler<DeleteCategoryCommand, Unit>
{
    private readonly DataContext _dataContext;


    public DeleteCategoryCommandHandler(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public Task<Unit> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
    {
        var category = _dataContext.Categories.FirstOrDefault(x => x.Id == request.CategoryId);

        if (category == null)
            throw new Exception("Cannot find this category");

        category.IsDeleted = true;
        
        _dataContext.Categories.Update(category);
        _dataContext.SaveChanges();
        
        return Task.FromResult(Unit.Value);
    }
    
}