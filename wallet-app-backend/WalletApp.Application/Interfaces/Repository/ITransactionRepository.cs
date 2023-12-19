using WalletApp.Application.Dtos;
using WalletApp.Application.utils;
using WalletApp.Domain.Entities;
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
    Task<IEnumerable<Transaction>> GetTransactionsByCategoryId(Guid userid, Guid categoryId);
    Task<Transaction?> GetTransactionById(Guid userId, Guid transactionId);
    Task<IEnumerable<Transaction>> GetSumByCurrency(Guid userId, Guid currencyId);
    Task<IEnumerable<GroupByCategoryDto>> IncomeGroupByCategory(Guid userId, Guid currencyId);
    Task<IEnumerable<GroupByCategoryDto>> CostGroupByCategory(Guid userId, Guid currencyId);
}