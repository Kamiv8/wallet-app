using MediatR;

namespace WalletApp.API.Controllers;

public class UserSettingsController
{
    private readonly IMediator _mediator;


    public UserSettingsController(IMediator mediator)
    {
        _mediator = mediator;
    }
    
    
    // change currencies
    
    // change password
    
    // change icon
    
    // change username
    
    // change category by id
    
    // add category
    
}