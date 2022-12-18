using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Category;

namespace WalletApp.API.Handlers.Category;

public class UpdateCategoryCommandHandler : IRequestHandler<UpdateCategoryCommand, Unit>
{
    private readonly DataContext _dataContext;


    public UpdateCategoryCommandHandler(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public Task<Unit> Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
    {
        var category = _dataContext.Categories.FirstOrDefault(x => x.Id == request.CategoryId);

        if (category == null)
            throw new Exception("Cannot find category");

        if (category.User == null)
            throw new Exception("Cannot update this category");
        
        category.Name = request.Name;
        _dataContext.Update(category);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}