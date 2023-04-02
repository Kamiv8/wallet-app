using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using WalletApp.API.Helpers;
using WalletApp.API.Models.enums;
using WalletApp.API.Models.queries.Transaction;
using WalletApp.API.Models.Transaction;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Transaction;

public class GetAllDefaultTransactionQueryHandler : IRequestHandler<GetAllDefaultTransactionsQuery, List<GetAllTransactionDto>>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public GetAllDefaultTransactionQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<List<GetAllTransactionDto>> Handle(GetAllDefaultTransactionsQuery request, CancellationToken cancellationToken)
    {
        List<Entities.Transaction> defaultTransactions = new List<Entities.Transaction>();

        if (request.Type == TransactionType.Person)
        {
           defaultTransactions = _dataContext.Transactions
                .Where(x => x.IsDefault == true && request.Type == x.Type && _authService.User!.Id == x.UserId)
                .Include(x => x.Category)
                .Include(x => x.Currency)
                .ToList();
        }

        if (request.Type == TransactionType.Group)
        {
            defaultTransactions = _dataContext.Transactions
                .Where(x => x.IsDefault == true && request.Type == x.Type && _authService.User!.GroupId == x.GroupId)
                .Include(x => x.Category)
                .Include(x => x.Currency)
                .ToList();
        }
        
        if (defaultTransactions.Count == 0)
        {
            return Task.FromResult(new List<GetAllTransactionDto>());
        }

        var mDefaultTransactions = _mapper.Map<List<GetAllTransactionDto>>(defaultTransactions);

        return Task.FromResult(mDefaultTransactions);
    }
}