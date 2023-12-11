using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Transaction.GetSumTransactions;

public class
    GetSumTransactionsQueryHandler : IQueryHandler<GetSumTransactionsQuery,
        IEnumerable<GetSumTransactionsResponseDto>>
{
    private readonly ITransactionRepository _transactionRepository;

    public GetSumTransactionsQueryHandler(ITransactionRepository transactionRepository)
    {
        _transactionRepository = transactionRepository;
    }

    public async Task<ApiResult<IEnumerable<GetSumTransactionsResponseDto>>> Handle(
        GetSumTransactionsQuery request, CancellationToken cancellationToken)
    {
        var userTransaction =
            await _transactionRepository.GetSumByCurrency(request.UserId, request.CurrencyId);

        var transactions = userTransaction as Domain.Entities.Transaction[] ?? userTransaction.ToArray();
        
        var dto = transactions.Select((entity, index) => new GetSumTransactionsResponseDto(
            transactions.Take(index + 1).Sum(e => e.Price), entity.Date, entity.Currency.Code
        ));
        return ApiResult<IEnumerable<GetSumTransactionsResponseDto>>.Success(dto);
    }
}