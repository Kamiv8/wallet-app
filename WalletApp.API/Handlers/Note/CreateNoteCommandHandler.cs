using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Note;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Note;

public class CreateNoteCommandHandler : IRequestHandler<CreateNoteCommand, Unit>
{
    
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public CreateNoteCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }
    
    
    public Task<Unit> Handle(CreateNoteCommand request, CancellationToken cancellationToken)
    {
        var user = _dataContext.Users.FirstOrDefault(x => x.Id == _authService.User.Id);

        if (user == null)
            throw new AppException("Cannot find user");


        var note = _mapper.Map<Entities.Note>(request);

        note.User = _authService.User!;
        note.IsDone = false;

        _dataContext.Notes.Add(note);
        _dataContext.SaveChanges();
        
        return Task.FromResult(Unit.Value);

    }
}