using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.queries.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class JoinUserNotificationsQueryHandler : IRequestHandler<JoinUserNotificationsQuery, List<JoinUserNotificationDto>>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public JoinUserNotificationsQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }


    public Task<List<JoinUserNotificationDto>> Handle(JoinUserNotificationsQuery request, CancellationToken cancellationToken)
    {
        var notificationType = _dataContext.NotificationsType.FirstOrDefault(x => x.Name == "Invite_User");
        var notifications = _dataContext.Notifications
            .Where(x =>
                x.User.Id == _authService.User!.Id && x.NotificationType == notificationType && x.Group.Id == _authService.User.GroupId)
            .ToList();


        var userList = new List<JoinUserNotificationDto>();

        notifications.ForEach(x =>
        {
            var mapUser = new JoinUserNotificationDto()
            {
                NotificationId = x.Id,
                UserId = x.User.Id,
                Email = x.User.Email,
                Username = x.User.Username,
                IconId = x.User.IconId,
            };
            userList.Add(mapUser);
        });

        return Task.FromResult(userList);
    }
}