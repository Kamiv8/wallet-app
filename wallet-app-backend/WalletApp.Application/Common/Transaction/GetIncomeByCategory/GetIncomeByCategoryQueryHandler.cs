using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Transaction.GetIncomeByCategory;

public class GetIncomeByCategoryQueryHandler : IQueryHandler<GetIncomeByCategoryQuery,
    IEnumerable<GetIncomeByCategoryResponseDto>>
{
    private readonly ITransactionRepository _repository;

    public GetIncomeByCategoryQueryHandler(ITransactionRepository repository)
    {
        _repository = repository;
    }

    public async Task<ApiResult<IEnumerable<GetIncomeByCategoryResponseDto>>> Handle(
        GetIncomeByCategoryQuery request, CancellationToken cancellationToken)
    {
        var transactions =
            await _repository.IncomeGroupByCategory(request.UserId, request.CurrencyId);
        var groupByCategoryDtos = transactions.ToList();
        if (!groupByCategoryDtos.Any())
            return ApiResult<IEnumerable<GetIncomeByCategoryResponseDto>>.Success(new List<GetIncomeByCategoryResponseDto>());

        var dto = groupByCategoryDtos.Select(x =>
            new GetIncomeByCategoryResponseDto(x.CategoryName, x.Price));

        return ApiResult<IEnumerable<GetIncomeByCategoryResponseDto>>.Success(dto);
    }
}