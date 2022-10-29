﻿using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.commands;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Models.Users.Dto;
using WalletApp.API.Models.Users.Response;
using WalletApp.API.Services;

namespace WalletApp.API.Controllers;



[Authorize]
[ApiController]
[Route("api/[controller]")]
public class UserController : BaseController
{

    private readonly IMediator _mediator;

    public UserController(IMediator mediator)
    {
        _mediator = mediator;
    }


    [AllowAnonymous]
    [HttpPost("authenticate")]
    public ActionResult<Authenticate> Authenticate([FromBody] AuthenticationCommand command, CancellationToken cancellationToken)
    {

        var commandWidthIp = new AuthenticationCommand()
        {
            Email = command.Email,
            Password = command.Password,
            IpAddress = IpAddress()
        };
        
        var res = _mediator.Send(commandWidthIp, cancellationToken);

        SetTokenCookie(res.Result.Data!);
        return Ok(res);
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisteredDto registeredDto, CancellationToken cancellationToken)
    {
        var command = new RegisterCommand()
        {
            Username = registeredDto.Username,
            Email = registeredDto.Email,
            Password = registeredDto.Password,
            ConfirmPassword = registeredDto.ConfirmPassword,
            IconId = registeredDto.IconId,
            Origin = Request.Headers["origin"],
            AcceptTerms = registeredDto.AcceptTerms
        };

        var res = _mediator.Send(command, cancellationToken);
        
        return Ok(new { message = "Registration successful, please check your email for verification instructions" });
    }

    [AllowAnonymous]
    [HttpPost("verify-email/{token}")]
    public IActionResult VerifyEmail(string token, CancellationToken cancellationToken)
    {
        var command = new VerifyEmailCommand()
        {
            Token = token
        };
        
        var res = _mediator.Send(command, cancellationToken);
        return Ok(res);
    }

    
    private void SetTokenCookie(string token)
    {
        var cookieOptions = new CookieOptions
        {
            HttpOnly = true,
            Expires = DateTime.UtcNow.AddDays(14)
        };
        Response.Cookies.Append("refreshToken", token, cookieOptions);
    }

    private string IpAddress()
    {
        if (Request.Headers.ContainsKey("X-Forwarded-For"))
            return Request.Headers["X-Forwarded-For"];
        return HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString();
    }

}