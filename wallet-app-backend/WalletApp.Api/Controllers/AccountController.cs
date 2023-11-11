using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Account.Authenticate;
using WalletApp.Application.Account.GetAccountData;
using WalletApp.Application.Account.Register;
using WalletApp.Application.Common;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;

[Route("api/[controller]")]
public class AccountController : BaseController
{
    private readonly IMediator _mediator;
    private readonly ICookieHelper _cookieHelper;

    public AccountController(IMediator mediator, ICookieHelper cookieHelper)
    {
        _mediator = mediator;
        _cookieHelper = cookieHelper;
    }


    [HttpPost("authenticate")]
    public async Task<ActionResult<ApiResult<AuthenticateResponseDto>>> Authentication(
        [FromBody] AuthenticateDto dto, CancellationToken cancellationToken)
    {
        var command = new AuthenticateCommand(dto.Email, dto.Password);
        var res = await _mediator.Send(command, cancellationToken);
        _cookieHelper.SetToken(res?.Data?.RefreshToken);
        return CreateResponse(res);
    }

    [HttpPost("register")]
    public async Task<ActionResult<ApiResult>> Register([FromBody] RegisterDto dto,
        CancellationToken cancellationToken)
    {
        var command = new RegisterCommand(dto.Username, dto.Email, dto.Password,
            dto.ConfirmPassword, dto.IconType);

        var res = await _mediator.Send(command, cancellationToken);

        return CreateResponse(res);
    }

    [Authorize]
    [HttpGet("data")]
    public async Task<ActionResult<ApiResult<GetAccountDataDto>>> GetAccountData(
        CancellationToken cancellationToken)
    {
        var user = HttpContext.User;
        var query = new GetAccountDataQuery();
        var res = await _mediator.Send(query, cancellationToken);
        return CreateResponse(res);
    }
}