using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Transaction.GetTransactionDetails;

public class GetTransactionDetailsQueryHandler : IQueryHandler<GetTransactionDetailsQuery,
    GetTransactionDetailsResponseDto>
{
    private readonly ITransactionRepository _repository;

    public GetTransactionDetailsQueryHandler(ITransactionRepository repository)
    {
        _repository = repository;
    }

    public async Task<ApiResult<GetTransactionDetailsResponseDto>> Handle(
        GetTransactionDetailsQuery request, CancellationToken cancellationToken)
    {
        var transaction =
            await _repository.GetTransactionById(request.UserId, request.TransactionId);

        if (transaction is null)
            return ApiResult<GetTransactionDetailsResponseDto>.Error(); // TODO error message

        var transactionsByCategory =
            await _repository.GetTransactionsByCategoryId(request.UserId, transaction.CategoryId);

        var sumAnotherTransactions = transactionsByCategory
            .Where(x => x.Id != transaction.Id)
            .Sum(x => x.Price);
        
        var sumDictionary = new Dictionary<string, decimal>
        {
            { "all", sumAnotherTransactions },
            { "currentCategory", transaction.Price }
        };

        var dto = new GetTransactionDetailsResponseDto(
            transaction.Id,
            transaction.Title,
            transaction.Category.Name,
            transaction.Price,
            transaction.Currency.Code,
            transaction.Date,
            sumDictionary,
            transaction?.Description
        );

        return ApiResult<GetTransactionDetailsResponseDto>.Success(dto);
    }
}