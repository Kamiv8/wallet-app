using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistance.Repositories;

public class CategoryRepository : ICategoryRepository
{
    private readonly WalletDbContext _db;

    public CategoryRepository(WalletDbContext db)
    {
        _db = db;
    }

    public async Task<IEnumerable<Category>> GetUserCategoriesById(Guid? id,
        CancellationToken cancellationToken)
    {
        return await _db.Categories
            .Where(x => x.UserIdentityId == id && !x.IsDeleted)
            .ToListAsync(cancellationToken);
    }

    public async Task CreateCategory(Category category,
        CancellationToken cancellationToken)
    {
        await _db.Categories.AddAsync(category, cancellationToken);
    }

    public async Task<Category?> GetUserCategoryByName(Guid? userId, string name, CancellationToken cancellationToken)
    {
        return await _db.Categories.FirstOrDefaultAsync(x =>
            x.UserIdentityId == userId && x.Name == name, cancellationToken);
    }

    public async Task<Category?> GetUserCategoryById(Guid? id, CancellationToken cancellationToken)
    {
        return await _db.Categories.FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted, cancellationToken);
    }

    public void DeleteUserCategory(Category category)
    {
        _db.Categories.Remove(category);
    }

    public async Task SaveAsync(CancellationToken cancellationToken)
    {
        await _db.SaveChangesAsync(cancellationToken);
    }
}