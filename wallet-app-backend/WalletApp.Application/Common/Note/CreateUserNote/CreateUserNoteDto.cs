namespace WalletApp.Application.Common.Note.CreateUserNote;

public sealed record CreateUserNoteDto(
    string Title,
    string Text,
    string TextColor,
    string BackgroundColor
);