using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Token.RevokeRefreshToken;
using WalletApp.Application.Token.UpdateRefreshToken;

namespace WalletApp.Controllers;



[Route("api/[controller]")]
public class TokenController : BaseController
{

    [HttpPut]
    public async Task<IActionResult> UpdateToken(CancellationToken cancellationToken)
    {
        var oldToken = Request.Cookies["refreshToken"];
        var command = new UpdateRefreshTokenCommand()
        {
            RefreshToken = oldToken,
        };
        var res = await Mediator.Send(command, cancellationToken);

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