using MediatR;
using WalletApp.Application.Common;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Account.GetAccountData;

public class GetAccountDataQueryHandler : IRequestHandler<GetAccountDataQuery, ApiResult<GetAccountDataDto>>
{
    private readonly IAccountDataRepository _repository;
    private readonly ICurrentUserService _userService;

    public GetAccountDataQueryHandler(IAccountDataRepository repository, ICurrentUserService userService)
    {
        _repository = repository;
        _userService = userService;
        
    }
    
    
    public Task<ApiResult<GetAccountDataDto>> Handle(GetAccountDataQuery request, CancellationToken cancellationToken)
    {
        
        
        throw new NotImplementedException();
    }
}