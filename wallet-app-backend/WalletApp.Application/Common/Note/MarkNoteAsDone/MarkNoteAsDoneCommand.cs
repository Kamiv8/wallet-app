using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Note.MarkNoteAsDone;

public sealed record MarkNoteAsDoneCommand(Guid UserId, Guid NoteId) : ICommand;