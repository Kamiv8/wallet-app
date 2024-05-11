using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Common.Transaction.GetIncomeByCategory;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Transaction.GetCostByCategory;

public class GetCostByCategoryQueryHandler(
    ITransactionRepository repository,
    IAccountDataRepository accountDataRepository,
    IDate date)
    : IQueryHandler<GetCostByCategoryQuery,
        IEnumerable<GetCostByCategoryResponseDto>>
{
    public async Task<ApiResult<IEnumerable<GetCostByCategoryResponseDto>>> Handle(
        GetCostByCategoryQuery request, CancellationToken cancellationToken)
    {
        var accountData =
            await accountDataRepository.GetUserById(request.UserId, cancellationToken);

        if (accountData is null)
            return ApiResult<IEnumerable<GetCostByCategoryResponseDto>>.Error(
                CommonErrorMessages.NoUserFromToken);


        var (startDate, endDate) = date.GetCurrentMonth(accountData.CustomDayRange);

        var groupedTransactions =
            await repository.CostGroupByCategory(request.UserId, request.CurrencyId,
                accountData.DateRangeOption, (startDate, endDate), accountData.CustomDateRange);

        var groupByCategoryDtos = groupedTransactions.ToList();
        if (!groupByCategoryDtos.Any())
            return ApiResult<IEnumerable<GetCostByCategoryResponseDto>>.Success(
                new List<GetCostByCategoryResponseDto>());

        var dto = groupByCategoryDtos.Select(x =>
            new GetCostByCategoryResponseDto(x.CategoryName, x.Price));

        return ApiResult<IEnumerable<GetCostByCategoryResponseDto>>.Success(dto);
    }
}