using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class FindGroupCommandHandler : IRequestHandler<FindGroupCommand, GroupDto>
{
    
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public FindGroupCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<GroupDto> Handle(FindGroupCommand request, CancellationToken cancellationToken)
    {
        var group = _dataContext.Groups.FirstOrDefault(x => x.Name.ToUpper().Trim() == request.Name.ToUpper().Trim());


        if (group == null)
        {
            throw new AppException("Cannot find this group");
        }

        var admin = _dataContext.Users.FirstOrDefault(x => x.Id == group.AdminId);

        if (admin == null)
        {
            throw new AppException("Cannot find admin");
        }

        var membersInGroup = _dataContext.Users.Count(x => x.GroupId == group.Id);
        var foundedGroup = new GroupDto()
        {
            Admin = admin.Username,
            Id = group.Id,
            Icon = group.Icon,
            Members = membersInGroup,
            Name = group.Name
        };


        return Task.FromResult(foundedGroup);
    }
}