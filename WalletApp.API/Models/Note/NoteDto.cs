namespace WalletApp.API.Models.Note;

public class NoteDto
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public List<string> Text { get; set; }
    public string TextColor { get; set; }
    public string BackgroundColor { get; set; }
}