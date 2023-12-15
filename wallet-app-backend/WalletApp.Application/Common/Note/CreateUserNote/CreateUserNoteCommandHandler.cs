using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using EntityNote = WalletApp.Domain.Entities.Note;

namespace WalletApp.Application.Common.Note.CreateUserNote;

public class CreateUserNoteCommandHandler : ICommandHandler<CreateUserNoteCommand>
{
    private readonly INoteRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public CreateUserNoteCommandHandler(INoteRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }
    
    public async Task<ApiResult> Handle(CreateUserNoteCommand request, CancellationToken cancellationToken)
    {
        var note = new EntityNote
        {
            UserIdentityId = request.UserId,
            Title = request.Title,
            Text = request.Text,
            TextColor = request.TextColor,
            BackgroundColor = request.BackgroundColor,
            IsDone = false
        };

        await _repository.CreateNote(note, cancellationToken);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return ApiResult.Success();
    }
}