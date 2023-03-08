using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.queries.Transaction;
using WalletApp.API.Models.Transaction;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Transaction;

public class GetAllTransactionQueryHandler : IRequestHandler<GetAllTransactionQuery, PagingResult<GetAllTransactionDto>>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public GetAllTransactionQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<PagingResult<GetAllTransactionDto>> Handle(GetAllTransactionQuery request, CancellationToken cancellationToken)
    {
        var transactions = _dataContext.Transactions
            .Where(x => x.UserId == _authService.User.Id  && x.Type == request.Type)
            .Include(x=> x.Currency)
            .Include(x => x.Category)
            .ToList();

        var mTransactions = _mapper.Map<List<GetAllTransactionDto>>(transactions);
        

        mTransactions.Reverse();
        var pagedList =
            PagedList<GetAllTransactionDto>.ToPagedList(mTransactions,request.PageNumber , request.PageSize);
        
        var res = new PagingResult<GetAllTransactionDto>
        {
            PageNumber = pagedList.CurrentPage,
            PageSize = pagedList.PageSize,
            Count = pagedList.TotalCount,
            TotalPages = pagedList.TotalPages,
            Items = pagedList
        };

        return Task.FromResult(res);
    }
}