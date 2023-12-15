using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Note.GetUserNoteDetails;

public sealed record GetUserNoteDetailsQuery(Guid NoteId) : IQuery<GetUserNoteDetailsResponseDto>;