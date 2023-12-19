using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Note.MarkNoteToDone;

public class MarkNoteAsDoneCommandHandler : ICommandHandler<MarkNoteAsDoneCommand>
{
    private readonly INoteRepository _repository;

    public MarkNoteAsDoneCommandHandler(INoteRepository repository)
    {
        _repository = repository;
    }
    
    public Task<ApiResult> Handle(MarkNoteAsDoneCommand request, CancellationToken cancellationToken)
    {
        
        
        
        throw new NotImplementedException();
    }
}