using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.User;

public class ChangeUsernameCommandHandler : IRequestHandler<ChangeUsernameCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;

    public ChangeUsernameCommandHandler(DataContext dataContext, IAuthService authService)
    {
        _dataContext = dataContext;
        _authService = authService;
    }
    
    
    public Task<Unit> Handle(ChangeUsernameCommand request, CancellationToken cancellationToken)
    {
        var user = _dataContext.Users.FirstOrDefault(x => x.Id == _authService.User!.Id);

        if (user == null)
        {
            throw new AppException("Cannot find user");
        }

        user.Username = request.NewUsername;
        _dataContext.Users.Update(user);
        
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}