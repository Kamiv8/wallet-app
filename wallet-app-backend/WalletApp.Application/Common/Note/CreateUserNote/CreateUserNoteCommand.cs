using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Note.CreateUserNote;

public sealed record CreateUserNoteCommand(
    Guid UserId,
    string Title,
    string Text,
    string TextColor,
    string BackgroundColor
) : ICommand;