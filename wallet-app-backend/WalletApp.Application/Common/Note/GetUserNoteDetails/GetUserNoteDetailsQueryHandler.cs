using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Application.utils;

namespace WalletApp.Application.Common.Note.GetUserNoteDetails;

public class
    GetUserNoteDetailsQueryHandler : IQueryHandler<GetUserNoteDetailsQuery,
    GetUserNoteDetailsResponseDto>
{
    private readonly INoteRepository _repository;

    public GetUserNoteDetailsQueryHandler(INoteRepository repository)
    {
        _repository = repository;
    }

    public async Task<ApiResult<GetUserNoteDetailsResponseDto>> Handle(
        GetUserNoteDetailsQuery request, CancellationToken cancellationToken)
    {
        var note = await _repository.GetUserNote(request.NoteId, cancellationToken);

        if (note is null) return ApiResult<GetUserNoteDetailsResponseDto>.Error(); // TODO


        var dto = new GetUserNoteDetailsResponseDto(note.Id, note.Title,
            NoteTextToList.ToList(note.Text), note.TextColor, note.BackgroundColor);

        return ApiResult<GetUserNoteDetailsResponseDto>.Success(dto);
    }
}