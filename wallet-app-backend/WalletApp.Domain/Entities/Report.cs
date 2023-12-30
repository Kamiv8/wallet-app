using WalletApp.Domain.Common;
using WalletApp.Domain.Enums;

namespace WalletApp.Domain.Entities;

public class Report : BaseEntity
{
    public DateTime Date { get; set; }
    public ReportType Type { get; set; }
    public Guid UserIdentityId { get; set; }
    public virtual UserIdentity UserIdentity { get; set; } = default!;
}