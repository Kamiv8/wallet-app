using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class ChangeMemberCommandHandler : IRequestHandler<ChangeMemberCommand, Unit>
{
    
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public ChangeMemberCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<Unit> Handle(ChangeMemberCommand request, CancellationToken cancellationToken)
    {

        var user = _dataContext.Users.FirstOrDefault(x => x.Id == request.UserId);

        if (user == null)
        {
            throw new AppException("Cannot find error");
        }

        user.Role = request.Role;
        
        _dataContext.Users.Update(user);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}