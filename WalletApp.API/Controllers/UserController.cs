using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Helpers;
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

    public UserController(IUserService userService)
    {
        _userService = userService;
    }


    [AllowAnonymous]
    [HttpPost("authenticate")]
    public ActionResult<Authenticate> Authenticate([FromBody] AuthenticateDTO authenticateDto)
    {
        var response = _userService.Authenticate(authenticateDto, ipAddress());
        SetTokenCookie(response.RefreshToken);
        return Ok(response);
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisteredDTO registeredDto)
    {
        _userService.Register(registeredDto, Request.Headers["origin"]);
        return Ok(new { message = "Registration successful, please check your email for verification instructions" });
    }

    [AllowAnonymous]
    [HttpPost("verify-email")]
    public IActionResult VerifyEmail([FromBody] VerifyEmailDTO verifyEmailDto)
    {
        _userService.VerifyEmail(verifyEmailDto.Token);
        return Ok(new {message = "Verification successful, you can now login"});
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