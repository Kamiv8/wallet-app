using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.enums;
using WalletApp.API.Models.queries.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class GetGroupMemberQueryHandler : IRequestHandler<GetGroupMemberQuery, List<UsersDto>>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public GetGroupMemberQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<List<UsersDto>> Handle(GetGroupMemberQuery request, CancellationToken cancellationToken)
    {

        var users = _dataContext.Users.Where(x => x.GroupId == _authService.User.GroupId).ToList();


        var listUsers = new List<UsersDto>();

        foreach (var user in users)
        {
            var mUser = new UsersDto()
            {
                Username = user.Username,
                Id = user.Id,
                Role = user.Role
            };
            
            listUsers.Add(mUser);
        }

        return Task.FromResult(listUsers);
    }
}