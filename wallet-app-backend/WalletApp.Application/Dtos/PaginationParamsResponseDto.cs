namespace WalletApp.Application.Dtos;

public record PaginationParamsResponseDto(
    int CurrentPage,
    int TotalPages,
    int PageSize,
    bool HasPrevious,
    bool HasNext
);