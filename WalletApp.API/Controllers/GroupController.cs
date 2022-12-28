using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Authorization;
using WalletApp.API.Models;
using WalletApp.API.Models.commands.Group;

namespace WalletApp.API.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class GroupController : BaseController
{
    private readonly IMediator _mediator;


    public GroupController(IMediator mediator)
    {
        _mediator = mediator;
    }
    
    // create group
    [HttpPost]
    public async Task<IActionResult> CreateGroup([FromBody] CreateGroupDto dto, CancellationToken cancellationToken)
    {
        var command = new CreateGroupCommand()
        {
            Name = dto.Name,
            MaxMembers = dto.MaxMembers,
            CurrencyId = dto.CurrencyId,
            Icon = dto.Icon
        };
        var res = await _mediator.Send(command, cancellationToken);

        return Ok(res);

    }


    // find group
    
    // sent request to join
    
}