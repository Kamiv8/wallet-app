using WalletApp.API.Models.enums;

namespace WalletApp.API.Models.Note;

public class CreateNoteDto
{
    public string Title { get; set; }
    public string Text { get; set; }
    public string TextColor { get; set; }
    public string BackgroundColor { get; set; }
    public TransactionType Type { get; set; }
}