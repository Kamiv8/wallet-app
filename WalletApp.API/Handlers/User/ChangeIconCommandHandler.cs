using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.User;

public class ChangeIconCommandHandler : IRequestHandler<ChangeIconCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;

    public ChangeIconCommandHandler(DataContext dataContext, IAuthService authService)
    {
        _dataContext = dataContext;
        _authService = authService;
    }
    
    public Task<Unit> Handle(ChangeIconCommand request, CancellationToken cancellationToken)
    {
        var user = _dataContext.Users.FirstOrDefault(x => x.Id == _authService.User.Id);

        if (user == null)
        {
            throw new Exception("Cannot find user");
        }

        if (request.IconId > 4)
        {
            throw new Exception("Cannot insert this icon");
        }

        user.IconId = request.IconId;
        _dataContext.Users.Update(user);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}