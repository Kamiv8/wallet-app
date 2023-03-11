using System.ComponentModel.DataAnnotations.Schema;

namespace WalletApp.API.Entities;

public class Currency
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Mark { get; set; }
    [Column(TypeName = "decimal(15,2)")]
    public decimal ExchangeRate { get; set; }

    public virtual List<Transaction> Transactions { get; set; } = new List<Transaction>();
    public virtual List<UserData> UserData { get; set; } = new List<UserData>();

    public virtual List<Group> Group { get; set; } = new List<Group>();

}