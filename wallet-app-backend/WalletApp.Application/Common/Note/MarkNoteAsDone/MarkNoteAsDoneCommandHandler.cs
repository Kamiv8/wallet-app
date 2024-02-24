using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Note.MarkNoteAsDone;

public class MarkNoteAsDoneCommandHandler : ICommandHandler<MarkNoteAsDoneCommand>
{
    private readonly INoteRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public MarkNoteAsDoneCommandHandler(INoteRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }
    
    public async Task<ApiResult> Handle(MarkNoteAsDoneCommand request, CancellationToken cancellationToken)
    {
        var note = await _repository.GetUserNote(request.NoteId, cancellationToken);
        
        if (note is null) return ApiResult.Error(NoteMessages.NoteNotFound);

        note.IsDone = true;

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return ApiResult.Success();
    }
}