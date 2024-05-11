using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Transaction.GetSumTransactions;

public class
    GetSumTransactionsQueryHandler(
        ITransactionRepository transactionRepository,
        ICurrencyRepository currencyRepository,
        IAccountDataRepository accountDataRepository,
        IDate date)
    : IQueryHandler<GetSumTransactionsQuery,
        IEnumerable<IEnumerable<GetSumTransactionsResponseDto>>>
{
    public async Task<ApiResult<IEnumerable<IEnumerable<GetSumTransactionsResponseDto>>>> Handle(
        GetSumTransactionsQuery request, CancellationToken cancellationToken)
    {
        var currencies = await currencyRepository.GetCurrencies(cancellationToken);

        if (!currencies.Any()) return ApiResult<IEnumerable<IEnumerable<GetSumTransactionsResponseDto>>>.Error(CommonErrorMessages.CommonError);


        var dto = new List<IEnumerable<GetSumTransactionsResponseDto>>();

        var accountData = await accountDataRepository.GetUserById(request.UserId, cancellationToken);

        if (accountData is null)
            return ApiResult<IEnumerable<IEnumerable<GetSumTransactionsResponseDto>>>.Error(
                CommonErrorMessages.NoUserFromToken);


        var (startDate, endDate) = date.GetCurrentMonth(accountData.CustomDayRange);
        
        foreach (var currency in currencies)
        {
            var userTransaction =
                await transactionRepository.GetSumByCurrency(request.UserId, currency.Id, accountData.DateRangeOption, (startDate, endDate), accountData.CustomDateRange);
            var currenciesTransaction = userTransaction as Domain.Entities.Transaction[] ??
                                        userTransaction.ToArray();
            dto.Add(currenciesTransaction
                .OrderBy(x => x.Date)
                .Select((entity, index) => new GetSumTransactionsResponseDto(
                    currenciesTransaction.Take(index + 1).Sum(e => e.Price),
                    entity.Date,
                    entity.Currency.Code
                ))
                .OrderBy(x => x.DateTime)
                .TakeLast(10)
                .ToList()
            );

        }

        return ApiResult<IEnumerable<IEnumerable<GetSumTransactionsResponseDto>>>.Success(dto);
    }
}