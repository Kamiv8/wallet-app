using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class AccountData : BaseEntity
{
    public decimal ActualMoneyPln { get; set; }
    public decimal ActualMoneyUsd { get; set; }
    public decimal ActualMoneyEur { get; set; }
    public decimal ActualMoneyChf { get; set; }
    public decimal ActualMoneyGbp { get; set; }
    public Guid UserIdentityId { get; set; }
    public virtual UserIdentity UserIdentity { get; set; } = default!;
}