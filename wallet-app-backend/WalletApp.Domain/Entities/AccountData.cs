using WalletApp.Domain.Common;
using WalletApp.Domain.Enums;

namespace WalletApp.Domain.Entities;

public class AccountData : BaseEntity
{
    public decimal ActualMoneyPln { get; set; }
    public decimal ActualMoneyUsd { get; set; }
    public decimal ActualMoneyEur { get; set; }
    public decimal ActualMoneyChf { get; set; }
    public decimal ActualMoneyGbp { get; set; }
    public Guid UserIdentityId { get; set; }
    public DateRangeOption DateRangeOption { get; set; }
    public int? CustomDayRange { get; set; }
    public DateTime? CustomDateRange { get; set; }
    public virtual UserIdentity UserIdentity { get; set; } = default!;
}