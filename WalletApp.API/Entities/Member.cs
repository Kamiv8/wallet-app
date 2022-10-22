using System.ComponentModel.DataAnnotations.Schema;

namespace WalletApp.API.Entities;

public class Member
{
    public Guid Id { get; set; }

    [ForeignKey("RoleId")]
    public virtual Role Role { get; set; }
    public Guid? RoleId { get; set; }
    
    public virtual Group Group { get; set; }


    [ForeignKey("UserId")]
    public virtual User User { get; set; }
    public Guid? UserId { get; set; }

    public virtual Transaction Transaction { get; set; }

}