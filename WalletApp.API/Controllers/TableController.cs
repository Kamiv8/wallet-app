using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Authorization;
using WalletApp.API.Models;
using WalletApp.API.Models.commands.Note;
using WalletApp.API.Models.Note;
using WalletApp.API.Models.queries.Note;

namespace WalletApp.API.Controllers;


[ApiController]
[Authorize]
[Route("api/[controller]")]
public class TableController : BaseController
{
    private readonly IMediator _mediator;


    public TableController(IMediator mediator)
    {
        _mediator = mediator;
    }
    
    
    // create note
    [HttpPost]
    public async Task<IActionResult> CreateNote([FromBody] CreateNoteDto dto, CancellationToken cancellationToken)
    {
        var command = new CreateNoteCommand()
        {
            Title = dto.Title,
            Text = dto.Text,
            BackgroundColor = dto.BackgroundColor,
            TextColor = dto.TextColor,
            Type = dto.Type
        };
        var res = await _mediator.Send(command, cancellationToken);

        return Ok(res);
    }
    
    // Get all notes

    [HttpGet]
    public async Task<ActionResult<List<NoteDto>>> GetAllNotes([FromQuery] ApplicationTypeDto dto, CancellationToken cancellationToken)
    {
        var query = new GetAllNotesQuery()
        {
            Type = dto.Type
        };

        var res = await _mediator.Send(query, cancellationToken);

        return Ok(res);
    }
    
    
    // Get note details

    [HttpGet("{id}")]
    public async Task<ActionResult<NoteDto>> GetNoteDetails(Guid id, CancellationToken cancellationToken)
    {
        var query = new GetNoteDetailsQuery()
        {
            Id = id
        };
        var res = await _mediator.Send(query, cancellationToken);

        return Ok(res);
    }
    
    // complete note
    [HttpPut("{id}")]
    public async Task<IActionResult> MarkNoteAsDone(Guid id, CancellationToken cancellationToken)
    {
        var command = new MarkNoteAsDoneCommand()
        {
            Id = id
        };

        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(res);

    }

    // edit note
    [HttpPut]
    public async Task<IActionResult> EditNote([FromBody] EditNoteDto dto, CancellationToken cancellationToken)
    {
        var command = new EditNoteCommand()
        {
            Id = dto.Id,
            Title = dto.Title,
            Text = dto.Text,
            BackgroundColor = dto.BackgroundColor,
            TextColor = dto.TextColor
        };
        var res = await _mediator.Send(command, cancellationToken);

        return Ok(res);
    }
    
}