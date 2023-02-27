using MediatR;

namespace WalletApp.API.Models.commands.Note;

public class MarkNoteAsDoneCommand : IRequest<Unit>
{
    public Guid Id { get; set; }
}