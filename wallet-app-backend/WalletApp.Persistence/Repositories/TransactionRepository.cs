using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Dtos;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Application.utils;
using WalletApp.Domain.Entities;
using WalletApp.Domain.Models;

namespace WalletApp.Persistance.Repositories;

public class TransactionRepository : ITransactionRepository
{
    private readonly WalletDbContext _db;

    public TransactionRepository(WalletDbContext db)
    {
        _db = db;
    }

    public async Task AddTransactionAsync(Transaction transaction,
        CancellationToken cancellationToken)
    {
        await _db.Transactions.AddAsync(transaction, cancellationToken);
    }

    public async Task<PagedList<Transaction>> GetTransactionList(Guid userId,
        PaginationParamsDto paginationParamsDto,
        CancellationToken cancellationToken)
    {
        var query = _db.Transactions
            .Include(x => x.Currency)
            .Include(x => x.Category)
            .Where(x => x.UserIdentityId == userId);

        return await PagedList<Transaction>.ToPagedList(query, paginationParamsDto,
            cancellationToken);
    }

    public async Task<Transaction?> GetTransactionById(Guid userId, Guid transactionId)
    {
        return await _db.Transactions
            .Include(x => x.Category)
            .Include(x => x.Currency)
            .FirstOrDefaultAsync(x => x.UserIdentityId == userId && x.Id == transactionId);
    }

    public async Task<IEnumerable<Transaction>> GetTransactionsByCategoryId(Guid userid,
        Guid categoryId)
    {
        return await _db.Transactions
            .Where(x => x.UserIdentityId == userid && x.Category.Id == categoryId)
            .ToListAsync();
    }

    public async Task<IEnumerable<Transaction>> GetSumByCurrency(Guid userId, Guid currencyId)
    {
        return await _db.Transactions
            .Include(x => x.Currency)
            .Include(x => x.Category)
            .Where(x => x.UserIdentityId == userId && x.Currency.Id == currencyId)
            .OrderByDescending(x => x.Date)
            .ToListAsync();
    }

    public async Task<IEnumerable<GroupByCategoryDto>> IncomeGroupByCategory(Guid userId,
        Guid currencyId)
    {
        return await _db.Transactions
            .Include(x => x.Category)
            .Include(x => x.Currency)
            .Where(x => x.UserIdentityId == userId && x.Currency.Id == currencyId && x.Price > 0)
            .GroupBy(x => x.Category)
            .Select((x) => new GroupByCategoryDto(x.Key.Name, x.Sum(t => t.Price)))
            .ToListAsync();
    }

    public async Task<IEnumerable<GroupByCategoryDto>> CostGroupByCategory(Guid userId,
        Guid currencyId)
    {
        return await _db.Transactions
            .Include(x => x.Category)
            .Include(x => x.Currency)
            .Where(x => x.UserIdentityId == userId && x.Currency.Id == currencyId && x.Price < 0)
            .GroupBy(x => x.Category)
            .Select((x) => new GroupByCategoryDto(x.Key.Name, x.Sum(t => t.Price)))
            .ToListAsync();
    }
}