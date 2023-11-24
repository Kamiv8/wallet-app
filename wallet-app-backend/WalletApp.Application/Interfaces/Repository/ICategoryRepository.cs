using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface ICategoryRepository
{
    Task<IEnumerable<Category>> GetUserCategoriesById(Guid? userid, CancellationToken cancellationToken);
    Task CreateCategory(Category category, CancellationToken cancellationToken);
    Task<Category?> GetUserCategoryByName(Guid? userId, string name, CancellationToken cancellationToken);
    Task<Category?> GetUserCategoryById(Guid? id, CancellationToken cancellationToken);
    void DeleteUserCategory(Category category);
    Task SaveAsync(CancellationToken cancellationToken);
}