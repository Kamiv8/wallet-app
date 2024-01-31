using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Common;
using WalletApp.Application.Common.Settings.ChangePassword;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;

[Authorize]
[Route("/api/[controller]")]
public class SettingsController : BaseController
{
    private readonly IMediator _mediator;
    private readonly ICurrentUserService _userService;

    public SettingsController(IMediator mediator, ICurrentUserService userService)
    {
        _mediator = mediator;
        _userService = userService;
    }


    [HttpPut("changePassword")]
    public async Task<ActionResult<ApiResult>> ChangePassword([FromBody] ChangePasswordDto dto,
        CancellationToken cancellationToken)
    {
        var command = new ChangePasswordCommand(_userService.Id, dto.OldPassword, dto.NewPassword);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }
}