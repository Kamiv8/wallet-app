using WalletApp.API.Models.enums;

namespace WalletApp.API.Models.Category;

public class CreateCategoryDto
{
    public string Name { get; set; }
    public TransactionType Type { get; set; }
    
}