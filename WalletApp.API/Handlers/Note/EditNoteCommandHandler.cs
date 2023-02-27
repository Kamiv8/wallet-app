using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Note;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Note;

public class EditNoteCommandHandler : IRequestHandler<EditNoteCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public EditNoteCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    public Task<Unit> Handle(EditNoteCommand request, CancellationToken cancellationToken)
    {
        var note = _dataContext.Notes.FirstOrDefault(x => x.Id == request.Id && x.User == _authService.User && !x.IsDone);

        if (note == null)
            throw new AppException("Cannot find this note");

        note.BackgroundColor = request.BackgroundColor;
        note.Text = request.Text;
        note.TextColor = request.TextColor;
        note.Title = request.Title;

        _dataContext.Notes.Update(note);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}