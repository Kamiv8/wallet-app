using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class RejectUserCommandHandler : IRequestHandler<RejectUserCommand, Unit>
{
    
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public RejectUserCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<Unit> Handle(RejectUserCommand request, CancellationToken cancellationToken)
    {
        var notification = _dataContext.Notifications.FirstOrDefault(x => x.Id == request.NotificationId);

        if (notification == null) throw new AppException("Cannot find notification");
        
        _dataContext.Notifications.Remove(notification);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}