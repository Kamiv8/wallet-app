using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Account.Authenticate;
using WalletApp.Application.Common;
using WalletApp.Application.Common.Account.Authenticate;
using WalletApp.Application.Common.Account.ChangeForgotPassword;
using WalletApp.Application.Common.Account.ChangeLanguage;
using WalletApp.Application.Common.Account.ConfirmRegisterEmail;
using WalletApp.Application.Common.Account.ForgotPassword;
using WalletApp.Application.Common.Account.GetAccountData;
using WalletApp.Application.Common.Account.Register;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;

[Route("api/[controller]")]
public class AccountController : BaseController
{
    private readonly IMediator _mediator;
    private readonly ICookieHelper _cookieHelper;
    private readonly ICurrentUserService _currentUserService;

    public AccountController(IMediator mediator, ICookieHelper cookieHelper, ICurrentUserService currentUserService)
    {
        _mediator = mediator;
        _cookieHelper = cookieHelper;
        _currentUserService = currentUserService;
    }

    [AllowAnonymous]
    [HttpPost("authenticate")]
    public async Task<ActionResult<ApiResult<AuthenticateResponseDto>>> Authentication(
        [FromBody] AuthenticateDto dto, CancellationToken cancellationToken)
    {
        var command = new AuthenticateCommand(dto.Username, dto.Password, IpAddress());
        var res = await _mediator.Send(command, cancellationToken);
        _cookieHelper.SetToken(res?.Data?.RefreshToken);
        return CreateResponse(res);
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<ActionResult<ApiResult>> Register([FromBody] RegisterDto dto,
        CancellationToken cancellationToken)
    {
        var command = new RegisterCommand(dto.Username, dto.Email, dto.Password,
            dto.ConfirmPassword, dto.IconType);

        var res = await _mediator.Send(command, cancellationToken);

        return CreateResponse(res);
    }

    [AllowAnonymous]
    [HttpGet("confirmEmail")]
    public async Task<ActionResult<ApiResult>> EmailConfirmation(string token, string email,
        CancellationToken cancellationToken)
    {
        var command = new ConfirmRegisterEmailCommand(email, token);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }

    [AllowAnonymous]
    [HttpPost("forgotPassword")]
    public async Task<ActionResult<ApiResult>> ForgotPassword([FromBody] ForgotPasswordDto dto,
        CancellationToken cancellationToken)
    {
        var command = new ForgotPasswordCommand(dto.Email);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }

    [AllowAnonymous]
    [HttpPost("changeForgotPassword")]
    public async Task<ActionResult<ApiResult>> ChangeForgotPassword(
        [FromBody] ChangeForgotPasswordDto dto, CancellationToken cancellationToken)
    {
        var command = new ChangeForgotPasswordCommand(dto.Email, dto.Token, dto.Password, dto.ConfirmPassword);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }

    [Authorize]
    [HttpGet("data")]
    public async Task<ActionResult<ApiResult<GetAccountDataResponseDto>>> GetAccountData(
        CancellationToken cancellationToken)
    {
        var query = new GetAccountDataQuery(_currentUserService.Id);
        var res = await _mediator.Send(query, cancellationToken);
        return CreateResponse(res);
    }

    [Authorize]
    [HttpPatch("changeLanguage")]
    public async Task<ActionResult<ApiResult<ChangeLanguageResponseDto>>> ChangeLanguage(
        [FromBody] ChangeLanguageDto dto, CancellationToken cancellationToken)
    {
        var command = new ChangeLanguageCommand(_currentUserService.Id, dto.Language);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }
}