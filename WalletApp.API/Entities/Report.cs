namespace WalletApp.API.Entities;

public class Report
{
    public Guid Id { get; set; }
    public DateTime Date { get; set; }
    public bool IsYearReport { get; set; }

    public virtual User? User { get; set; }

    public virtual Group? Group { get; set; }

}