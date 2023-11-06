using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Token.RevokeRefreshToken;
using WalletApp.Application.Token.UpdateRefreshToken;

namespace WalletApp.Controllers;



[Route("api/[controller]")]
public class TokenController : BaseController
{
    private readonly ICookieHelper _cookieHelper;

    public TokenController(ICookieHelper cookieHelper)
    {
        _cookieHelper = cookieHelper;
    }
    
    [HttpGet]
    public async Task<ActionResult<RefreshTokenDto>> GetTokens(CancellationToken cancellationToken)
    {
        var oldToken = Request.Cookies["refreshToken"];
        var command = new UpdateRefreshTokenCommand()
        {
            RefreshToken = oldToken,
        };
        var res = await Mediator.Send(command, cancellationToken);
        _cookieHelper.SetToken(res.RefreshToken);
        return Ok(res);
    }

    [HttpDelete]
    public async Task<IActionResult> RevokeToken(CancellationToken cancellationToken)
    {
        var command = new RevokeRefreshTokenCommand();
        await Mediator.Send(command, cancellationToken);
        return Ok();
    }
    
}