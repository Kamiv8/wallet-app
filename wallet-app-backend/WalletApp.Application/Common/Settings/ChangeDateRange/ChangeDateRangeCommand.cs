using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Enums;
using WalletApp.Domain.Enums;

namespace WalletApp.Application.Common.Settings.ChangeDateRange;

public sealed record ChangeDateRangeCommand(Guid userId, DateRangeOption Option, int? CustomDay, DateTime? CustomDate) : ICommand;