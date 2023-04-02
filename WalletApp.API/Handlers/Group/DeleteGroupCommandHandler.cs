using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class DeleteGroupCommandHandler : IRequestHandler<DeleteGroupCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public DeleteGroupCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<Unit> Handle(DeleteGroupCommand request, CancellationToken cancellationToken)
    {
        var group = _dataContext.Groups.FirstOrDefault(x => x.Id == _authService.User.GroupId);

        if (group == null)
        {
            throw new AppException("Cannot find group");
        }
        
        var groupMembers = _dataContext.Users.Where(x => x.GroupId == group.Id).ToList();

        
        foreach (var groupMember in groupMembers)
        {
            groupMember.GroupId = null;
            groupMember.Role = null;
        }
        
        _dataContext.Users.UpdateRange(groupMembers);

        _dataContext.Groups.Remove(group);

        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}