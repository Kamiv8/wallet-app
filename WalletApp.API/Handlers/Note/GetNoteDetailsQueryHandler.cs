using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.Note;
using WalletApp.API.Models.queries.Note;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Note;

public class GetNoteDetailsQueryHandler : IRequestHandler<GetNoteDetailsQuery, NoteDto>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public GetNoteDetailsQueryHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<NoteDto> Handle(GetNoteDetailsQuery request, CancellationToken cancellationToken)
    {

        var note = _dataContext.Notes.FirstOrDefault(x => x.Id == request.Id);

        if (note == null) throw new AppException("Cannot find this note");

        var noteDto = new NoteDto()
        {
            Id = note.Id,
            Title = note.Title,
            Text = note.Text.Split('\n').ToList(),
            BackgroundColor = note.BackgroundColor,
            TextColor = note.TextColor,
        };

        return Task.FromResult(noteDto);
    }
}