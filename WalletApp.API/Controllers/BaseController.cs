using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Entities;

namespace WalletApp.API.Controllers;


[Controller]
public abstract class BaseController : ControllerBase
{
    public User User => (User)HttpContext.Items["Account"];
}