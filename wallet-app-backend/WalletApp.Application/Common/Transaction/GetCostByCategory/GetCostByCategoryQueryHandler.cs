using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Transaction.GetCostByCategory;

public class GetCostByCategoryQueryHandler : IQueryHandler<GetCostByCategoryQuery,
    IEnumerable<GetCostByCategoryResponseDto>>
{
    private readonly ITransactionRepository _repository;

    public GetCostByCategoryQueryHandler(ITransactionRepository repository)
    {
        _repository = repository;
    }

    public async Task<ApiResult<IEnumerable<GetCostByCategoryResponseDto>>> Handle(
        GetCostByCategoryQuery request, CancellationToken cancellationToken)
    {
        var groupedTransactions =
            await _repository.CostGroupByCategory(request.UserId, request.CurrencyId);

        var groupByCategoryDtos = groupedTransactions.ToList();
        if (!groupByCategoryDtos.Any())
            return ApiResult<IEnumerable<GetCostByCategoryResponseDto>>.Success(new List<GetCostByCategoryResponseDto>());

        var dto = groupByCategoryDtos.Select(x =>
            new GetCostByCategoryResponseDto(x.CategoryName, x.Price));

        return ApiResult<IEnumerable<GetCostByCategoryResponseDto>>.Success(dto);
    }
}