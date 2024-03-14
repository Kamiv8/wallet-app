using System.Collections;
using WalletApp.Domain.Common;

namespace WalletApp.Domain.Entities;

public class CategoryColors : BaseEntity
{
    public string Color { get; init; } = default!;
    public ICollection<Category> Categories { get; init; } = default!;
    public bool IsUsed { get; init; }
}