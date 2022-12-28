using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WalletApp.API.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class StatsController: BaseController
{
    private readonly IMediator _mediator;

    public StatsController(IMediator mediator)
    {
        _mediator = mediator;
    }
    
    
    // Get grouped money by category income
    
    // Get grouped money by category cost

    // Get category transactions
    
    // Get saved transactions
    
    // Get money array

}