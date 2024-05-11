using WalletApp.Application.Enums;
using WalletApp.Domain.Enums;

namespace WalletApp.Application.Common.Settings.ChangeDateRange;

public sealed record ChangeDateRangeDto(DateRangeOption Option, int? CustomDay, DateTime? CustomDate);