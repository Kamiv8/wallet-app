using WalletApp.Application.Dtos;
using WalletApp.Application.utils;
using WalletApp.Domain.Entities;
using WalletApp.Domain.Enums;
using WalletApp.Domain.Models;

namespace WalletApp.Application.Interfaces.Repository;

public interface ITransactionRepository
{
    Task AddTransactionAsync(Transaction transaction, CancellationToken cancellationToken);

    Task<PagedList<Transaction>> GetTransactionList(
        Guid userId,
        PaginationParamsDto paginationParamsDto,
        CancellationToken cancellationToken
    );

    Task<IEnumerable<Transaction>> GetTransactionsByCategoryId(Guid userid, Guid categoryId, DateRangeOption dateRangeOption, (DateTime start, DateTime end) date,
        DateTime? customDateRange);
    Task<Transaction?> GetTransactionById(Guid userId, Guid transactionId);

    Task<IEnumerable<Transaction>> GetSumByCurrency(Guid userId, Guid currencyId,
        DateRangeOption dateRangeOption, (DateTime start, DateTime end) date,
        DateTime? customDateRange);

    Task<IEnumerable<GroupByCategoryDto>> IncomeGroupByCategory(Guid userId, Guid currencyId,
        DateRangeOption dateRangeOption, (DateTime start, DateTime end) date,
        DateTime? customDateRange);

    Task<IEnumerable<GroupByCategoryDto>> CostGroupByCategory(Guid userId, Guid currencyId,
        DateRangeOption dateRangeOption, (DateTime start, DateTime end) date,
        DateTime? customDateRange);
}