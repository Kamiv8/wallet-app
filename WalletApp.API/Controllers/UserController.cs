using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Authorization;
using WalletApp.API.Models;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Models.queries.User;
using WalletApp.API.Models.Users.Dto;

namespace WalletApp.API.Controllers;

[ApiController]
[Authorize]
[Route("/api/[controller]")]
public class UserController : BaseController
{
    private readonly IMediator _mediator;


    public UserController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet("userData")]
    public async Task<ActionResult<GetUserDataDTO>> GetUserData(CancellationToken cancellationToken)
    {
        var query = new GetUserDataQuery();
        var res = await _mediator.Send(query, cancellationToken);
        return Ok(res);
    }

    [HttpGet("actualMoney")]
    public async Task<ActionResult<GetActualMoneyDto>> GetActualMoney(CancellationToken cancellationToken)
    {
        var query = new GetUserActualMoneyQuery();
        var res = await _mediator.Send(query, cancellationToken);
        return Ok(res);
    }


    [HttpPut("changeCurrencies")]
    public async Task<IActionResult> ChangeDefaultCurrencies(ChangeCurrencyCommand dto,
        CancellationToken cancellationToken)
    {
        var command = new ChangeCurrencyCommand()
        {
            CurrencyId = dto.CurrencyId
        };
        var res = await _mediator.Send(command, cancellationToken);
        return Ok(res);
    }

    [HttpPut("changeIcon")]
    public async Task<IActionResult> ChangeUserIcon(ChangeUserIconDto dto, CancellationToken cancellationToken)
    {
        var command = new ChangeIconCommand()
        {
            IconId = dto.IconId
        };
        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(new {message = "User icon changed successful"});
    }

    [HttpPut("changePassword")]
    public async Task<IActionResult> ChangeUserPassword(ChangeUserPasswordDto dto, CancellationToken cancellationToken)
    {
        var command = new ChangeUserPasswordCommand()
        {
            OldPassword = dto.OldPassword,
            NewPassword = dto.NewPassword,
            ConfirmNewPassword = dto.ConfirmNewPassword
        };
        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(new {message = "User password changed successful"});
    }

    [HttpPut("changeUsername")]
    public async Task<IActionResult> ChangeUsername(ChangeUsernameDto dto, CancellationToken cancellationToken)
    {
        var command = new ChangeUsernameCommand()
        {
            NewUsername = dto.NewUsername
        };

        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(new {message = "Username changed successful"});
    }
    


}