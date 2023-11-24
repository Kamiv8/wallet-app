using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Common;
using WalletApp.Application.Common.Token.RevokeRefreshToken;
using WalletApp.Application.Common.Token.UpdateRefreshToken;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;


[Authorize]
[Route("api/[controller]")]
public class TokenController : BaseController
{
    private readonly IMediator _mediator;
    private readonly ICookieHelper _cookieHelper;

    public TokenController(IMediator mediator, ICookieHelper cookieHelper)
    {
        _mediator = mediator;
        _cookieHelper = cookieHelper;
    }
    
    [HttpGet("{oldToken}")]
    public async Task<ActionResult<ApiResult<RefreshTokenResponseDto>>> GetTokens([FromRoute] string oldToken, CancellationToken cancellationToken)
    {
        var command = new UpdateRefreshTokenCommand(oldToken, IpAddress());
        var res = await _mediator.Send(command, cancellationToken);
        _cookieHelper.SetToken(res.Data?.RefreshToken);
        return CreateResponse(res);
    }

    [HttpDelete]
    public async Task<ActionResult<ApiResult>> RevokeToken(CancellationToken cancellationToken)
    {
        var command = new RevokeRefreshTokenCommand();
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }
}