using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Dtos;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Transaction.GetTransactionList;

public class
    GetTransactionListQueryHandler : IQueryHandler<GetTransactionListQuery,
        GetTransactionListResponseDto>
{
    private readonly ITransactionRepository _transactionRepository;

    public GetTransactionListQueryHandler(ITransactionRepository transactionRepository)
    {
        _transactionRepository = transactionRepository;
    }

    public async Task<ApiResult<GetTransactionListResponseDto>> Handle(
        GetTransactionListQuery request,
        CancellationToken cancellationToken)
    {
        var transactions = await _transactionRepository.GetTransactionList(request.UserId,
            request.PaginationParamsDto, cancellationToken);

        var mappedTransactions = transactions.Select(x => new TransactionResponseDto(x.Id, x.Title,
            x.Date,
            x.Category.Name,
            x.Price,
            x.Currency.Code,
            x.Description
        ));

        var dto = new GetTransactionListResponseDto(mappedTransactions,
            new PaginationParamsResponseDto(transactions.CurrentPage, transactions.TotalPages,
                transactions.PageSize, transactions.HasPrevious, transactions.HasNext));

        return ApiResult<GetTransactionListResponseDto>.Success(dto);
    }
}