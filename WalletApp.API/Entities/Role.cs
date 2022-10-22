namespace WalletApp.API.Entities;

public class Role
{
    public Guid Id { get; set; }
    public string Name { get; set; }

    public virtual Member Member { get; set; }
}