namespace WalletApp.API.Entities;

public class Currency
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Mark { get; set; }

    public virtual Transaction Transaction { get; set; }

    public virtual Group Group { get; set; }

}