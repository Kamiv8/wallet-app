using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Authorization;
using WalletApp.API.Models.Currency;
using WalletApp.API.Models.queries.Currency;

namespace WalletApp.API.Controllers;


[ApiController]
[Authorize]
[Route("api/[controller]")]
public class CurrencyController : ControllerBase
{
    private readonly IMediator _mediator;

    public CurrencyController(IMediator mediator)
    {
        _mediator = mediator;
    }
    

    [HttpGet]
    public async Task<ActionResult<List<CurrencyDto>>> GetCurrency(CancellationToken cancellationToken)
    {
        var query = new GetCurrencyQuery();

        var res = await _mediator.Send(query, cancellationToken);
        
        return Ok(res);
    }
    
    
    // update exchangedRate
    
    
    
    
}