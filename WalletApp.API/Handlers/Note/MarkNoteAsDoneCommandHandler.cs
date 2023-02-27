using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Note;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Note;

public class MarkNoteAsDoneCommandHandler : IRequestHandler<MarkNoteAsDoneCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public MarkNoteAsDoneCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    
    public Task<Unit> Handle(MarkNoteAsDoneCommand request, CancellationToken cancellationToken)
    {
        var note = _dataContext.Notes.FirstOrDefault(x => x.Id == request.Id && x.User == _authService.User);

        if (note == null || note.IsDone)
            throw new AppException("Cannot find this note");

        note.IsDone = true;
        _dataContext.Notes.Update(note);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}