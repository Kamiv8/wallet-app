using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Account.Authenticate;
using WalletApp.Application.Account.Register;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;

[Route("api/[controller]")]
public class AccountController : BaseController
{
    private readonly ICookieHelper _cookieHelper;

    public AccountController(ICookieHelper cookieHelper)
    {
        _cookieHelper = cookieHelper;
    }
    

    [HttpPost("authenticate")]
    public async Task<ActionResult<AuthenticateDto>> Authentication([FromBody] AuthenticateCommand command, CancellationToken cancellationToken)
    {
        var res = await Mediator.Send(command, cancellationToken);
        _cookieHelper.SetToken(res.RefreshToken);
        return Ok(res);
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterCommand command, CancellationToken cancellationToken)
    {
        await Mediator.Send(command, cancellationToken);

        return Created("",null);
    }
    
}