using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Transaction.GetSumTransactions;

public class
    GetSumTransactionsQueryHandler : IQueryHandler<GetSumTransactionsQuery,
    IEnumerable<IEnumerable<GetSumTransactionsResponseDto>>>
{
    private readonly ITransactionRepository _transactionRepository;
    private readonly ICurrencyRepository _currencyRepository;

    public GetSumTransactionsQueryHandler(ITransactionRepository transactionRepository,
        ICurrencyRepository currencyRepository)
    {
        _transactionRepository = transactionRepository;
        _currencyRepository = currencyRepository;
    }

    public async Task<ApiResult<IEnumerable<IEnumerable<GetSumTransactionsResponseDto>>>> Handle(
        GetSumTransactionsQuery request, CancellationToken cancellationToken)
    {
        var currencies = await _currencyRepository.GetCurrencies(cancellationToken);

        if (!currencies.Any()) return ApiResult<IEnumerable<IEnumerable<GetSumTransactionsResponseDto>>>.Error(CommonErrorMessages.CommonError);


        var dto = new List<IEnumerable<GetSumTransactionsResponseDto>>();
        
        foreach (var currency in currencies)
        {
            var userTransaction =
                await _transactionRepository.GetSumByCurrency(request.UserId, currency.Id);
            var currenciesTransaction = userTransaction as Domain.Entities.Transaction[] ??
                                        userTransaction.ToArray();
            
            dto.Add(currenciesTransaction.OrderBy(x => x.Date).Select((entity, index) => new GetSumTransactionsResponseDto(
                currenciesTransaction.Take(index + 1).Sum(e => e.Price), entity.Date, entity.Currency.Code
            )));
        }

        return ApiResult<IEnumerable<IEnumerable<GetSumTransactionsResponseDto>>>.Success(dto);
    }
}