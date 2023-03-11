using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.queries.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class JoinUserNotificationCountQueryHandler : IRequestHandler<JoinUserNotificationCountQuery, JoinUserNotifiCountDto>
{
    
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public JoinUserNotificationCountQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    
    public Task<JoinUserNotifiCountDto> Handle(JoinUserNotificationCountQuery request, CancellationToken cancellationToken)
    {

        var notificationType = _dataContext.NotificationsType.FirstOrDefault(x => x.Name == "Invite_User");




        var notificationsCount = _dataContext.Notifications.Count(x =>
            x.NotificationTypeId == notificationType!.Id && x.Group.Id == _authService.User.GroupId);


        var result = new JoinUserNotifiCountDto()
        {
            Count = notificationsCount
        };

        return Task.FromResult(result);
    }
}