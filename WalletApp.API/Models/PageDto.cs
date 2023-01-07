using WalletApp.API.Models.enums;

namespace WalletApp.API.Models;

public class PageDto
{
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public TransactionType Type { get; set; }
}