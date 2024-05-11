using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Common.Transaction.GetSumTransactions;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Transaction.GetIncomeByCategory;

public class GetIncomeByCategoryQueryHandler(
    ITransactionRepository repository,
    IAccountDataRepository accountDataRepository,
    IDate date)
    : IQueryHandler<GetIncomeByCategoryQuery,
        IEnumerable<GetIncomeByCategoryResponseDto>>
{
    public async Task<ApiResult<IEnumerable<GetIncomeByCategoryResponseDto>>> Handle(
        GetIncomeByCategoryQuery request, CancellationToken cancellationToken)
    {
        var accountData =
            await accountDataRepository.GetUserById(request.UserId, cancellationToken);

        if (accountData is null)
            return ApiResult<IEnumerable<GetIncomeByCategoryResponseDto>>.Error(
                CommonErrorMessages.NoUserFromToken);


        var (startDate, endDate) = date.GetCurrentMonth(accountData.CustomDayRange);


        var transactions =
            await repository.IncomeGroupByCategory(request.UserId, request.CurrencyId,
                accountData.DateRangeOption, (startDate, endDate), accountData.CustomDateRange);
        var groupByCategoryDtos = transactions.ToList();
        if (!groupByCategoryDtos.Any())
            return ApiResult<IEnumerable<GetIncomeByCategoryResponseDto>>.Success(
                new List<GetIncomeByCategoryResponseDto>());

        var dto = groupByCategoryDtos.Select(x =>
            new GetIncomeByCategoryResponseDto(x.CategoryName, x.Price));

        return ApiResult<IEnumerable<GetIncomeByCategoryResponseDto>>.Success(dto);
    }
}