using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Authorization;
using WalletApp.API.Models;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Models.enums;
using WalletApp.API.Models.queries.Group;
using WalletApp.API.Models.Users.Dto;

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
    public async Task<ActionResult<GroupIdDto>> CreateGroup([FromBody] CreateGroupDto dto, CancellationToken cancellationToken)
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
    [Authorize(Role.Admin)]
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
    [Authorize(Role.Admin)]
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

    [HttpGet("notificationCount")]
    [Authorize(Role.Admin)]
    public async Task<ActionResult<JoinUserNotifiCountDto>> GetJoinUserNotificationCount(CancellationToken cancellationToken)
    {
        var query = new JoinUserNotificationCountQuery();

        var res = await _mediator.Send(query, cancellationToken);
        
        return Ok(res);
    }
    
    // get users from group
    [HttpGet("users")]
    [Authorize(Role.Admin)]
    public async Task<ActionResult<List<UsersDto>>> GetGroupUsers(CancellationToken cancellationToken)
    {
        var query = new GetGroupMemberQuery();

        var res = await _mediator.Send(query, cancellationToken);
        
        return Ok(res);
    }
    
    // get group data
    [HttpGet("groupData")]
    [Authorize(Role.Admin)]
    public async Task<ActionResult<GroupDataDto>> GetGroupData(CancellationToken cancellationToken)
    {
        var query = new GetGroupDataQuery();

        var res = await _mediator.Send(query, cancellationToken);
        
        return Ok(res);
    }
    
    // get actual money and currency
    [HttpGet("actualMoney")]
    [Authorize(Role.Admin, Role.Member)]
    public async Task<IActionResult> GetActualMoney(CancellationToken cancellationToken)
    {
        var query = new GetActualMoneyQuery();

        var res = await _mediator.Send(query, cancellationToken);
        
        return Ok(res);
    }
    
    // SETTINGS
    
    // change group name
    [HttpPut("changeName")]
    [Authorize(Role.Admin)]
    public async Task<IActionResult> ChangeGroupName([FromBody] GroupChangeNameDto dto, CancellationToken cancellationToken)
    {
        var command = new ChangeGroupNameCommand()
        {
            GroupName = dto.GroupName
        };

        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(res);
    }
    
    // change icon
    [HttpPut("changeIcon")]
    [Authorize(Role.Admin)]
    public async Task<IActionResult> ChangeIcon([FromBody] ChangeIconDto dto, CancellationToken cancellationToken)
    {

        var command = new ChangeIconCommand()
        {
            IconId = dto.IconId
        };

        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(res);
    }

    // change currency
    [HttpPut("changeCurrency")]
    [Authorize(Role.Admin)]
    public async Task<IActionResult> ChangeCurrency([FromBody] ChangeCurrencyDto dto,CancellationToken cancellationToken)
    {
        var command = new ChangeCurrencyCommand()
        {
            CurrencyId = dto.CurrencyId
        };

        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(res);
    }
    
    // delete user
    [HttpDelete("user")]
    [Authorize(Role.Admin)]
    public async Task<IActionResult> DeleteUserFromGroup([FromBody] DeleteUserDto dto, CancellationToken cancellationToken)
    {

        var command = new DeleteUserCommand()
        {
            UserId = dto.UserId
        };

        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(res);
    }
    
    // change role for user
    [HttpPut("changeMember")]
    [Authorize(Role.Admin)]
    public async Task<IActionResult> ChangeMemberRole([FromQuery] ChangeMemberDto dto, CancellationToken cancellationToken)
    {
        var command = new ChangeMemberCommand()
        {
            Role = dto.Role,
            UserId = dto.UserId
        };

        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(res);
    }

    // delete group
    [HttpDelete]
    [Authorize(Role.Admin)]
    public async Task<IActionResult> DeleteGroup(CancellationToken cancellationToken)
    {
        var command = new DeleteGroupCommand();

        var res = await _mediator.Send(command, cancellationToken);

        return Ok(res);
    }
}