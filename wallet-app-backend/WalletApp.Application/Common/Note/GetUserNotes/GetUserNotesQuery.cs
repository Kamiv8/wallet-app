using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Note.GetUserNotes;

public sealed record GetUserNotesQuery(Guid UserId): IQuery<IReadOnlyCollection<GetUserNotesResponseDto>>;