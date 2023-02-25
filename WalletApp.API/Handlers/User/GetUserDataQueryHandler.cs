using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.queries.User;
using WalletApp.API.Models.Users.Dto;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.User;

public class GetUserDataQueryHandler : IRequestHandler<GetUserDataQuery, GetUserDataDTO>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;


    public GetUserDataQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<GetUserDataDTO> Handle(GetUserDataQuery request, CancellationToken cancellationToken)
    {
        var user = _dataContext.Users.FirstOrDefault(x => x.Id == _authService.User.Id);

        if (user == null)
        {
            throw new Exception("Cannot founded user");
        }

        var mUser = _mapper.Map<GetUserDataDTO>(user);

        return Task.FromResult(mUser);
    }
}