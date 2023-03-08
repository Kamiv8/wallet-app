using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Authorization;
using WalletApp.API.Models;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Models.enums;
using WalletApp.API.Models.queries.Group;

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
    [HttpPost("findGroup")]
    public async Task<ActionResult<GroupDto>> FindGroup([FromBody] FindGroupDto dto, CancellationToken cancellationToken)
    {
        var command = new FindGroupCommand()
        {
            Name = dto.Name
        };

        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(res);
    }

    // sent request to join
    [HttpPost("setToJoin")]
    public async Task<IActionResult> SetToJoin([FromBody] SentToJoinDto dto, CancellationToken cancellationToken)
    {
        var command = new SentToJoinGroupCommand()
        {
            GroupId = dto.GroupId
        };
        
        var res = await _mediator.Send(command, cancellationToken);

        return Ok(res);
    }
    
    // get group join notifications
    [HttpGet("joinNotifications")]
    [Authorize(Role.Admin)]
    public async Task<ActionResult<JoinUserNotificationDto>> JoinRequestNotification(CancellationToken cancellationToken)
    {
        var query = new JoinUserNotificationsQuery();
        
        var res = await _mediator.Send(query, cancellationToken);
        
        return Ok(res);
    }

    // accept request to join
    [HttpPost("acceptUser")]
    public async Task<IActionResult> AcceptUser([FromBody] AcceptUserDto dto, CancellationToken cancellationToken)
    {
        var command = new AcceptUserCommand()
        {
            UserId = dto.UserId,
            NotificationId = dto.NotificationId
        };

        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(res);
    }
    
    // reject request to join
    [HttpPost("rejectUser")]
    public async Task<IActionResult> RejectUser([FromBody] RejectUserDto dto, CancellationToken cancellationToken)
    {
        var command = new RejectUserCommand()
        {
            UserId = dto.UserId,
            NotificationId = dto.NotificationId
        };
        
        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(res);
    }
    
    // SETTINGS
    
    // change group name
    
    // 
    
}