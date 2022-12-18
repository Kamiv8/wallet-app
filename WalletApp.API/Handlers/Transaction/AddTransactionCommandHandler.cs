using MediatR;
using WalletApp.API.Authorization;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.commands.Transaction;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Transaction;

public class AddTransactionCommandHandler: IRequestHandler<AddTransactionCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IJwtUtils _jwtUtils;
    private readonly IAuthService _authService;


    public AddTransactionCommandHandler(DataContext dataContext, IJwtUtils jwtUtils, IAuthService authService)
    {
        _dataContext = dataContext;
        _jwtUtils = jwtUtils;
        _authService = authService;
    }
    
    public Task<Unit> Handle(AddTransactionCommand command, CancellationToken cancellationToken)
    {

        var user = _dataContext.Users.FirstOrDefault(x => x.Id == _authService.User!.Id);
        
        
        
        
        
        
        
        
        throw new NotImplementedException();
    }
}