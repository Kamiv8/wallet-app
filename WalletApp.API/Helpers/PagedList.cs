using WalletApp.API.Models.Transaction;

namespace WalletApp.API.Helpers;

public class PagedList<T> : List<T>
{
    public int CurrentPage { get; private set; }
    public int TotalCount { get; private set; }
    public int PageSize { get; private set; }

    public int TotalPages { get; private set; }
    
    public PagedList(List<T> items, int pageSize, int currentPage, int totalCount)
    {
        PageSize = pageSize;
        CurrentPage = currentPage;
        TotalCount = totalCount;
        TotalPages = (int) Math.Ceiling(totalCount / (double) pageSize);
        AddRange(items);
    }

    public static PagedList<T> ToPagedList(List<T> source, int pageNumber, int pageSize)
    {
        var count = source.Count;
        List<T> items = source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList();
        return new PagedList<T>(items, pageSize, pageNumber, count );
    }
}