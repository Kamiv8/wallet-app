namespace WalletApp.API.Entities;

public class Category
{
    public Guid Id { get; set; }
    public string Name { get; set; }

    public virtual User? User { get; set; }

    public virtual List<Transaction> Transactions { get; set; } = new List<Transaction>();
}