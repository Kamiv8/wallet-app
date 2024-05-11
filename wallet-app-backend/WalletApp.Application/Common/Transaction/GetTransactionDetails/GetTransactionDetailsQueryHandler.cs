using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Transaction.GetTransactionDetails;

public class GetTransactionDetailsQueryHandler(
    ITransactionRepository repository,
    IAccountDataRepository accountDataRepository,
    IDate date)
    : IQueryHandler<GetTransactionDetailsQuery,
        GetTransactionDetailsResponseDto>
{
    public async Task<ApiResult<GetTransactionDetailsResponseDto>> Handle(
        GetTransactionDetailsQuery request, CancellationToken cancellationToken)
    {
        var transaction =
            await repository.GetTransactionById(request.UserId, request.TransactionId);

        if (transaction is null)
            return ApiResult<GetTransactionDetailsResponseDto>.Error(TransactionMessages
                .TransactionNotFound);
        
        var accountData = await accountDataRepository.GetUserById(request.UserId, cancellationToken);

        if (accountData is null)
            return ApiResult<GetTransactionDetailsResponseDto>.Error(
                CommonErrorMessages.NoUserFromToken);


        var (startDate, endDate) = date.GetCurrentMonth(accountData.CustomDayRange);

        var transactionsByCategory =
            await repository.GetTransactionsByCategoryId(request.UserId, transaction.CategoryId, accountData.DateRangeOption, (startDate, endDate), accountData.CustomDateRange);

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