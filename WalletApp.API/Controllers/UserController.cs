using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.commands;
using WalletApp.API.Models.Users.Dto;
using WalletApp.API.Models.Users.Response;
using WalletApp.API.Services;

namespace WalletApp.API.Controllers;



[Authorize]
[ApiController]
[Route("api/[controller]")]
public class UserController : BaseController
{
    private readonly IUserService _userService;

    private readonly IMediator _mediator;

    public UserController(IUserService userService, IMediator mediator)
    {
        this._userService = userService;
        this._mediator = mediator;
    }


    [AllowAnonymous]
    [HttpPost("authenticate")]
    public ActionResult<Authenticate> Authenticate([FromBody] AuthenticationCommand command, CancellationToken cancellationToken)
    {

        var commandWidthIp = new AuthenticationCommand()
        {
            Email = command.Email,
            Password = command.Password,
            IpAddress = ipAddress()
        };
        
        var res = _mediator.Send(commandWidthIp, cancellationToken);

        SetTokenCookie(res.Result.Data!);
        return Ok(res);
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisteredDTO registeredDto)
    {
        _userService.Register(registeredDto, Request.Headers["origin"] ); 
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

    private string ipAddress()
    {
        if (Request.Headers.ContainsKey("X-Forwarded-For"))
            return Request.Headers["X-Forwarded-For"];
        else
            return HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString();
    }

}