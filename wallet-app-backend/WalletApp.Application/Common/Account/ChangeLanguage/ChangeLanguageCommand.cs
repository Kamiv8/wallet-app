using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Domain.Enums;

namespace WalletApp.Application.Common.Account.ChangeLanguage;

public sealed record ChangeLanguageCommand(Guid UserId, Language Language) : ICommand<ChangeLanguageResponseDto>;