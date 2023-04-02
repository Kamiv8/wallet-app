using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Models.enums;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class CreateTransactionCommandHandler : IRequestHandler<CreateGroupCommand, GroupIdDto>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public CreateTransactionCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<GroupIdDto> Handle(CreateGroupCommand request, CancellationToken cancellationToken)
    {
        if (_authService.User.GroupId != null)
        {
            throw new Exception("You are already part of the group");
        }

        var group = _mapper.Map<Entities.Group>(request);

        group.Money = 0;
        group.AdminId = _authService.User.Id;

        _dataContext.Groups.Add(group);
        var user = _dataContext.Users.FirstOrDefault(x => x.Id == _authService.User.Id);
        user.GroupId = group.Id;
        user.Role = Role.Admin;
        var result = new GroupIdDto()
        {
            GroupId = group.Id,
            UserRole = Role.Admin
        };
        _dataContext.Users.Update(user);
        _dataContext.SaveChanges();
        
        return Task.FromResult(result);
    }
}