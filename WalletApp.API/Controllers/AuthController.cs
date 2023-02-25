using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Models.commands;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Models.Users.Dto;

namespace WalletApp.API.Controllers;



[ApiController]
[Route("api/[controller]")]
public class AuthController : BaseController
{

    private readonly IMediator _mediator;

    public AuthController(IMediator mediator)
    {
        _mediator = mediator;
    }


    [HttpPost("authenticate")]
    public async Task<ActionResult<string>> Authenticate([FromBody] AuthenticationCommand command, CancellationToken cancellationToken)
    {

        var commandWidthIp = new AuthenticationCommand()
        {
            Email = command.Email,
            Password = command.Password,
            IpAddress = IpAddress()
        };
        
        var res = await _mediator.Send(commandWidthIp, cancellationToken);
        
        SetTokenCookie(res.Data!.RefreshToken);
        return Ok( new { Token = res.Data.JwtToken} );
    }

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


    [HttpPost("forgot-password")]
    public IActionResult ForgotPassword([FromBody] ForgotPasswordDTO dto, CancellationToken cancellationToken)
    {
        var command = new ForgotPasswordCommand()
        {
            Email = dto.Email,
            Origin = Request.Headers["origin"]
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