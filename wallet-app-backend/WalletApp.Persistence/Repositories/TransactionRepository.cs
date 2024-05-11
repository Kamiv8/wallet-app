using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Dtos;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Application.utils;
using WalletApp.Domain.Entities;
using WalletApp.Domain.Enums;
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
            .Where(x => x.UserIdentityId == userId)
            .OrderByDescending(x => x.Date);

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
        Guid categoryId,  DateRangeOption dateRangeOption, (DateTime start, DateTime end) date,
        DateTime? customDateRange)
    {
        return await _db.Transactions
            .Where(x => x.UserIdentityId == userid && x.Category.Id == categoryId && (
                (dateRangeOption == DateRangeOption.CUSTOM_DAY && x.Date >= date.start &&
                 x.Date <= date.end) || (dateRangeOption == DateRangeOption.CUSTOM_DATE &&
                                         x.Date >= customDateRange)))
            .ToListAsync();
    }

    public async Task<IEnumerable<Transaction>> GetSumByCurrency(Guid userId, Guid currencyId,
        DateRangeOption dateRangeOption, (DateTime start, DateTime end) date,
        DateTime? customDateRange)
    {
        return await _db.Transactions
            .Include(x => x.Currency)
            .Include(x => x.Category)
            .Where(x =>
                x.UserIdentityId == userId && x.Currency.Id == currencyId && (
                    (dateRangeOption == DateRangeOption.CUSTOM_DAY && x.Date >= date.start &&
                     x.Date <= date.end) || (dateRangeOption == DateRangeOption.CUSTOM_DATE &&
                                             x.Date >= customDateRange)))
            .OrderByDescending(x => x.Date)
            .GroupBy(x => x.Date.Date)
            .Select(group => new Transaction
            {
                Date = group.Key,
                Price = group.Sum(x => x.Price),
                Currency = group.First().Currency
            })
            .ToListAsync();
    }

    public async Task<IEnumerable<GroupByCategoryDto>> IncomeGroupByCategory(Guid userId,
        Guid currencyId, DateRangeOption dateRangeOption, (DateTime start, DateTime end) date,
        DateTime? customDateRange)
    {
        return await _db.Transactions
            .Include(x => x.Category)
            .Include(x => x.Currency)
            .Where(x => x.UserIdentityId == userId && x.Currency.Id == currencyId && x.Price > 0 && (
                (dateRangeOption == DateRangeOption.CUSTOM_DAY && x.Date >= date.start &&
                 x.Date <= date.end) || (dateRangeOption == DateRangeOption.CUSTOM_DATE &&
                                         x.Date >= customDateRange)))
            .GroupBy(x => x.Category)
            .Select((x) => new GroupByCategoryDto(x.Key.Name, x.Sum(t => t.Price)))
            .ToListAsync();
    }

    public async Task<IEnumerable<GroupByCategoryDto>> CostGroupByCategory(Guid userId,
        Guid currencyId, DateRangeOption dateRangeOption, (DateTime start, DateTime end) date,
        DateTime? customDateRange)
    {
        return await _db.Transactions
            .Include(x => x.Category)
            .Include(x => x.Currency)
            .Where(x => x.UserIdentityId == userId && x.Currency.Id == currencyId && x.Price < 0 && (
                (dateRangeOption == DateRangeOption.CUSTOM_DAY && x.Date >= date.start &&
                 x.Date <= date.end) || (dateRangeOption == DateRangeOption.CUSTOM_DATE &&
                                         x.Date >= customDateRange)))
            .GroupBy(x => x.Category)
            .Select((x) => new GroupByCategoryDto(x.Key.Name, x.Sum(t => t.Price)))
            .ToListAsync();
    }
    
}