namespace WalletApp.API.Entities;

public class Category
{
    public Guid Id { get; set; }
    public string Name { get; set; }

    public virtual Transaction Transaction { get; set; }
}