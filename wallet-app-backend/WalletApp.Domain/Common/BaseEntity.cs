namespace WalletApp.Domain.Common;

public class BaseEntity
{
    public Guid Id { get; set; }
    public Guid? CratedBy { get; set; }
    public DateTime? CreatedTime { get; set; }
    public Guid? ModifiedBy { get; set; }
    public DateTime? ModifiedTime { get; set; }
    public Guid? DeletedBy { get; set; }
    public DateTime? DeletedTime { get; set; }
    public bool IsDeleted { get; set; }
}