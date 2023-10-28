using System.Net;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Account.Authenticate;
using WalletApp.Application.Account.Register;

namespace WalletApp.Controllers;

[Route("api/[controller]")]
public class AccountController : BaseController
{


    [HttpPost("authenticate")]
    public async Task<ActionResult<AuthenticateDto>> Authentication([FromBody] AuthenticateCommand command, CancellationToken cancellationToken)
    {
        var res = await Mediator.Send(command, cancellationToken);

        return Ok(res);
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterCommand command, CancellationToken cancellationToken)
    {
        await Mediator.Send(command, cancellationToken);

        return Created("",null);
    }
    
}