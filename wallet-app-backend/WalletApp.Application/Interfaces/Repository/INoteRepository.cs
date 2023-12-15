using WalletApp.Domain.Entities;

namespace WalletApp.Application.Interfaces.Repository;

public interface INoteRepository
{
    Task CreateNote(Note note, CancellationToken cancellationToken);
    Task<IEnumerable<Note>> GetAllUserNotes(Guid userId, CancellationToken cancellationToken);
    Task<Note?> GetUserNote(Guid noteId, CancellationToken cancellationToken);
}