using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class ChangeIconCommandHandler : IRequestHandler<ChangeIconCommand, Unit>
{
    
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public ChangeIconCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    
    public Task<Unit> Handle(ChangeIconCommand request, CancellationToken cancellationToken)
    {

        var group = _dataContext.Groups.FirstOrDefault(x => x.Id == _authService.User.GroupId);


        if (group == null)
        {
            throw new AppException("Cannot find group");
        }


        group.Icon = request.IconId;

        _dataContext.Groups.Update(group);
        _dataContext.SaveChanges();


        return Task.FromResult(Unit.Value);
    }
}