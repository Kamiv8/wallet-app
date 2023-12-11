using WalletApp.Application.Enums;

namespace WalletApp.Application.Dtos;

public sealed record FilterSortedParams(string? FilterKey, string? FilterValue, SortParams? SortedParam);