namespace WalletApp.Application.Common.Account.GetAccountData;

public sealed record GetAccountDataResponseDto(
    decimal ActualMoneyPln,
    decimal ActualMoneyUsd,
    decimal ActualMoneyChf,
    decimal ActualMoneyGbp,
    decimal ActualMoneyEur,
    Guid? GroupId
);