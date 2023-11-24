using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Currency.GetCurrencies;

public sealed record GetCurrenciesQuery : IQuery<IEnumerable<GetCurrenciesQueryResponseDto>>;