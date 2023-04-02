using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.enums;
using WalletApp.API.Models.Note;
using WalletApp.API.Models.queries.Note;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Note;

public class GetAllNotesQueryHandler : IRequestHandler<GetAllNotesQuery, List<NoteDto>>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public GetAllNotesQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    
    public Task<List<NoteDto>> Handle(GetAllNotesQuery request, CancellationToken cancellationToken)
    {
        List<Entities.Note> notes;

        if (request.Type == TransactionType.Person)
        {
            notes = _dataContext.Notes.Where(x => x.User.Id == _authService.User.Id && !x.IsDone && x.GroupId == null).ToList();
        }
        else
        {
            notes = _dataContext.Notes.Where(x => x.GroupId == _authService.User.GroupId && !x.IsDone).ToList();
        }

        var noteDtos = new List<NoteDto>();
        
        foreach (var note in notes)
        {
            var noteDto = new NoteDto()
            {
                Id = note.Id,
                Title = note.Title,
                Text = note.Text.Split('\n').ToList(),
                TextColor = note.TextColor,
                BackgroundColor = note.BackgroundColor
            };
            noteDtos.Add(noteDto);
        }

        return Task.FromResult(noteDtos);

    }
}