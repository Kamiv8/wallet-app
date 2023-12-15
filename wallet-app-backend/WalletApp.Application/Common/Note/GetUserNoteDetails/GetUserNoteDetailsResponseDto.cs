namespace WalletApp.Application.Common.Note.GetUserNoteDetails;

public sealed record GetUserNoteDetailsResponseDto(
    Guid Id,
    string Title,
    IEnumerable<string> TextList,
    string TextColor,
    string BackgroundColor
);