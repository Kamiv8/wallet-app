using System.ComponentModel.DataAnnotations.Schema;

namespace WalletApp.API.Entities;

public class UserData
{
    public Guid Id { get; set; }
    
    [Column(TypeName = "decimal(15,2)")]
    public decimal ActualMoneyValue { get; set; }
    
    [ForeignKey("CurrencyId")]
    public virtual Currency Currency { get; set; }
    public Guid CurrencyId { get; set; }
    
    [ForeignKey("UserId")]
    public virtual User User { get; set; }
    public Guid UserId { get; set; }
    
    
}