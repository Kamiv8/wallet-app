namespace WalletApp.Application.Common.Note.GetUserNotes;

public sealed record GetUserNotesResponseDto(
    Guid Id,
    string Title,
    string TextColor,
    string BackgroundColor,
    IEnumerable<string> TextList
);