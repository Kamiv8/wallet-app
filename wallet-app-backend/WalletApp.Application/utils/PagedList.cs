using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Dtos;

namespace WalletApp.Application.utils;

public class PagedList<T> : List<T>
{
    public int CurrentPage { get; private set; }
    public int TotalPages { get; private set; }
    public int PageSize { get; private set; }
    public int TotalCount { get; private set; }

    public bool HasPrevious => CurrentPage > 1;
    public bool HasNext => CurrentPage < TotalPages;

    private PagedList(IEnumerable<T> items, int count, int pageNumber, int pageSize)
    {
        CurrentPage = pageNumber;
        TotalPages = (int)Math.Ceiling(count / (double)pageSize);
        TotalCount = count;
        PageSize = pageSize;

        AddRange(items);
    }

    public static async Task<PagedList<T>> ToPagedList(IQueryable<T> source,
        PaginationParamsDto paginationParamsDto,
            CancellationToken cancellationToken)
    {
        if (!source.Any())
            return new PagedList<T>(source.ToList(), 0, paginationParamsDto.PageNumber,
                paginationParamsDto.PageSize);

        var items = source.Skip((paginationParamsDto.PageNumber - 1) * paginationParamsDto.PageSize)
            .Take(paginationParamsDto.PageSize);


        return new PagedList<T>(await items.ToListAsync(cancellationToken), source.Count(),
            paginationParamsDto.PageNumber,
            paginationParamsDto.PageSize);
    }
}