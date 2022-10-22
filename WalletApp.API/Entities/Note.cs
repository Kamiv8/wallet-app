namespace WalletApp.API.Entities;

public class Note
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Text { get; set; }
    public string TextColor { get; set; }
    public string BackgroundColor { get; set; }
    public bool IsDone { get; set; }
    
    public virtual User User { get; set; }

    public virtual Group Group { get; set; }
    
}