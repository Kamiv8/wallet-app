using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Common;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Token.RevokeRefreshToken;
using WalletApp.Application.Token.UpdateRefreshToken;
using WalletApp.Domain.Common;

namespace WalletApp.Controllers;



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
    public async Task<ActionResult<ApiResult<RefreshTokenDto>>> GetTokens([FromRoute] string oldToken, CancellationToken cancellationToken)
    {
        var command = new UpdateRefreshTokenCommand(oldToken);
        var res = await _mediator.Send(command, cancellationToken);
        _cookieHelper.SetToken(res.Data.RefreshToken);
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