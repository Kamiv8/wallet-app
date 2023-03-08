using AutoMapper;
using MediatR;
using WalletApp.API.Entities;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class SentToJoinGroupCommandHandler : IRequestHandler<SentToJoinGroupCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public SentToJoinGroupCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    
    public Task<Unit> Handle(SentToJoinGroupCommand request, CancellationToken cancellationToken)
    {
        var inviteUser = _dataContext.NotificationsType.FirstOrDefault(x => x.Name == "Invite_User");
        var user = _dataContext.Users.FirstOrDefault(x => x.Id == _authService.User!.Id);
        var group = _dataContext.Groups.FirstOrDefault(x => x.Id == request.GroupId);


        var notification = new Notification()
        {
            Date = DateTime.Today,
            NotificationTypeId = inviteUser!.Id,
            User = user,
            Group = group
        };

        _dataContext.Notifications.Add(notification);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}