using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.DefaultTransaction.GetDefaultUserTransactions;

public class GetDefaultUserTransactionsQueryHandler : IQueryHandler<GetDefaultUserTransactionsQuery,
    IReadOnlyCollection<GetDefaultUserTransactionResponseDto>>
{
    private readonly IDefaultTransactionRepository _repository;

    public GetDefaultUserTransactionsQueryHandler(IDefaultTransactionRepository repository)
    {
        _repository = repository;
    }


    public async Task<ApiResult<IReadOnlyCollection<GetDefaultUserTransactionResponseDto>>> Handle(
        GetDefaultUserTransactionsQuery request, CancellationToken cancellationToken)
    {
        var transactions =
            await _repository.GetAllDefaultTransactions(request.UserId, cancellationToken);

        if (!transactions.Any())
            return ApiResult<IReadOnlyCollection<GetDefaultUserTransactionResponseDto>>.Success(
                new List<GetDefaultUserTransactionResponseDto>());

        var dto = transactions
            .Select(x =>
                new GetDefaultUserTransactionResponseDto(
                    x.Id,
                    x.Title,
                    x.Category.Name,
                    x.Price,
                    x.Currency.Code,
                    x.TextColor,
                    x.BackgroundColor,
                    x.Description
                ))
            .ToList();

        return ApiResult<IReadOnlyCollection<GetDefaultUserTransactionResponseDto>>.Success(dto);
    }
}