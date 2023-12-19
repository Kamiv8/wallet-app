using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Persistance.Repositories;

public class NoteRepository : INoteRepository
{
    private readonly WalletDbContext _db;

    public NoteRepository(WalletDbContext db)
    {
        _db = db;
    }

    public async Task CreateNote(Note note, CancellationToken cancellationToken)
    {
        await _db.Notes.AddAsync(note, cancellationToken);
    }

    public async Task<IEnumerable<Note>> GetAllUserNotes(Guid userId, CancellationToken cancellationToken)
    {
        return await _db.Notes
            .Where(x => x.UserIdentityId == userId)
            .ToListAsync(cancellationToken);
    }

    public Task<Note?> GetUserNote(Guid noteId, CancellationToken cancellationToken)
    {
        return _db.Notes.FirstOrDefaultAsync(x => x.Id == noteId, cancellationToken);
    }


}