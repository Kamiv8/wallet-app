using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Application.utils;
using EntityNote = WalletApp.Domain.Entities.Note;

namespace WalletApp.Application.Common.Note.GetUserNotes;

public class GetUserNotesQueryHandler : IQueryHandler<GetUserNotesQuery,
    IReadOnlyCollection<GetUserNotesResponseDto>>
{
    private readonly INoteRepository _repository;

    public GetUserNotesQueryHandler(INoteRepository repository)
    {
        _repository = repository;
    }

    public async Task<ApiResult<IReadOnlyCollection<GetUserNotesResponseDto>>> Handle(
        GetUserNotesQuery request, CancellationToken cancellationToken)
    {
        var notes = await _repository.GetAllUserNotes(request.UserId, cancellationToken);

        var enumerable = notes as EntityNote[] ?? notes.ToArray();
        if (!enumerable.Any())
            return ApiResult<IReadOnlyCollection<GetUserNotesResponseDto>>.Success(
                new List<GetUserNotesResponseDto>());

        var dto = enumerable.Select(x =>
            new GetUserNotesResponseDto(x.Id, x.Title, x.TextColor, x.BackgroundColor, NoteTextToList.ToList(x.Text))).ToList();


        return ApiResult<IReadOnlyCollection<GetUserNotesResponseDto>>.Success(dto);
    }
}