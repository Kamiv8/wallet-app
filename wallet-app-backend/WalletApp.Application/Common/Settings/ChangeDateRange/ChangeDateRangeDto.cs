using WalletApp.Application.Enums;

namespace WalletApp.Application.Common.Settings.ChangeDateRange;

public sealed record ChangeDateRangeDto(DateRangeOption Option, string? CustomDay, DateTime? CustomDate);