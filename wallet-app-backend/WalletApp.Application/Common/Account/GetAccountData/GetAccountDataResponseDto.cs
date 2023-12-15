using WalletApp.Domain.Enums;

namespace WalletApp.Application.Common.Account.GetAccountData;

public sealed record GetAccountDataResponseDto(
    string Username,
    IconType IconType,
    decimal ActualMoneyPln,
    decimal ActualMoneyUsd,
    decimal ActualMoneyChf,
    decimal ActualMoneyGbp,
    decimal ActualMoneyEur,
    Guid? GroupId
);