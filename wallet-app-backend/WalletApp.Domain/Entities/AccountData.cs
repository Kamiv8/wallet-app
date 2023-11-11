using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class AccountData : BaseEntity
{
    public decimal ActualMoney { get; set; }
    public Guid AccountId { get; set; }
    public virtual Account Account { get; set; }
}