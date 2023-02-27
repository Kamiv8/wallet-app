using MediatR;
using WalletApp.API.Models.Note;

namespace WalletApp.API.Models.queries.Note;

public class GetNoteDetailsQuery : IRequest<NoteDto>
{
    public Guid Id { get; set; }   
}