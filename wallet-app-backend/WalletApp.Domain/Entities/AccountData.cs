using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class AccountData : BaseEntity
{
    public decimal ActualMoney { get; set; }
    public Guid UserIdentityId { get; set; }
    public virtual UserIdentity UserIdentity { get; set; } = default!;
}