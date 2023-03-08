using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Models.enums;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class AcceptUserCommandHandler : IRequestHandler<AcceptUserCommand, Unit>
{
    
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public AcceptUserCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<Unit> Handle(AcceptUserCommand request, CancellationToken cancellationToken)
    {
        var newGroupUser = _dataContext.Users.FirstOrDefault(x => x.Id == request.UserId);

        var notification = _dataContext.Notifications.FirstOrDefault(x => x.Id == request.NotificationId);

        if (notification == null)
        {
            throw new AppException("Cannot find this notification");
        }
        
        if (newGroupUser == null)
        {
            throw new AppException("Cannot find user");
        }

        if (newGroupUser.GroupId != null)
        {
            throw new AppException("The user now has a group");
        }

        newGroupUser.GroupId = _authService.User!.GroupId;
        newGroupUser.Role = Role.Member;

        _dataContext.Notifications.Remove(notification);
        _dataContext.Users.Update(newGroupUser);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}