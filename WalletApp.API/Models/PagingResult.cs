
using WalletApp.API.Helpers;

namespace WalletApp.API.Models;

public class PagingResult<T>
{
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public int Count { get; set; }
    public int TotalPages { get; set; }
    public PagedList<T> Items { get; set; }
}