using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.enums;
using WalletApp.API.Models.queries.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class GetGroupDataQueryHandler : IRequestHandler<GetGroupDataQuery, GroupDataDto>
{
    
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public GetGroupDataQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    
    public Task<GroupDataDto> Handle(GetGroupDataQuery request, CancellationToken cancellationToken)
    {
        var group = _dataContext.Groups.FirstOrDefault(x => x.Id == _authService.User.GroupId);

        if (group == null)
        {
            throw new AppException("Cannot find group");
        }

        var members = _dataContext.Users.Where(x => x.GroupId == group.Id).ToList();

        var admins = members.Where(x => x.Role == Role.Admin).Select(x => x.Username).ToList();

        var dto = new GroupDataDto()
        {
            Admins = admins,
            GroupName = group.Name,
            Id = group.Id,
            IconId = group.Icon,
            MembersCount = members.Count(),
            MaxMembers = group.MaxMembers
        };

        return Task.FromResult(dto);
    }
}