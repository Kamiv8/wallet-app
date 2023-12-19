using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Common;
using WalletApp.Application.Common.Note.CreateUserNote;
using WalletApp.Application.Common.Note.GetUserNoteDetails;
using WalletApp.Application.Common.Note.GetUserNotes;
using WalletApp.Application.Common.Note.MarkNoteAsDone;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;

[Authorize]
[Route("/api/[controller]")]
public class NotesUserController : BaseController
{
    private readonly IMediator _mediator;
    private readonly ICurrentUserService _currentUserService;

    public NotesUserController(IMediator mediator, ICurrentUserService currentUserService)
    {
        _mediator = mediator;
        _currentUserService = currentUserService;
    }

    [HttpGet]
    public async Task<ActionResult<ApiResult<IReadOnlyCollection<GetUserNotesResponseDto>>>>
        GetAllUserNotes(CancellationToken cancellationToken)
    {
        var query = new GetUserNotesQuery(_currentUserService.Id);
        var res = await _mediator.Send(query, cancellationToken);
        return CreateResponse(res);
    }

    [HttpPost]
    public async Task<ActionResult<ApiResult>> CreateUserNote([FromBody] CreateUserNoteDto dto,
        CancellationToken cancellationToken)
    {
        var command = new CreateUserNoteCommand(_currentUserService.Id, dto.Title, dto.Text,
            dto.TextColor, dto.BackgroundColor);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<ApiResult<GetUserNoteDetailsResponseDto>>> GetUserNoteDetails(
        [FromRoute] Guid id, CancellationToken cancellationToken)
    {
        var query = new GetUserNoteDetailsQuery(id);
        var res = await _mediator.Send(query, cancellationToken);
        return CreateResponse(res);
    }

    [HttpPatch("markAsDone")]
    public async Task<ActionResult<ApiResult>> MarkAsDone([FromBody] MarkNoteAsDoneDto dto, CancellationToken cancellationToken)
    {
        var command = new MarkNoteAsDoneCommand(_currentUserService.Id, dto.NoteId);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }
}