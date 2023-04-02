using MediatR;
using WalletApp.API.Models.enums;
using WalletApp.API.Models.Note;

namespace WalletApp.API.Models.queries.Note;

public class GetAllNotesQuery: IRequest<List<NoteDto>>
{
    public TransactionType Type { get; set; }   
}