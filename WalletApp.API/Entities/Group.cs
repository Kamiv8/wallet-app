using System.ComponentModel.DataAnnotations.Schema;

namespace WalletApp.API.Entities;

public class Group
{
    public Guid Id { get; set; }
    public int Icon { get; set; }
    public string Name { get; set; }
    public int MaxMembers { get; set; }
    [Column(TypeName = "decimal(15,2)")]
    public decimal Money { get; set; }
    public Guid AdminId { get; set; }
    [ForeignKey("CurrencyId")]
    public virtual Currency Currency { get; set; }
    public Guid CurrencyId { get; set; }

    public List<Report> Reports { get; set; } = new List<Report>();

    public List<Notification> Notifications { get; set; } = new List<Notification>();
    
    public List<Note> Notes { get; set; } = new List<Note>();
}