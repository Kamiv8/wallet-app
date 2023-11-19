using MediatR;

namespace WalletApp.Application.Common.Currency.GetCurrency;

public sealed record GetCurrenciesQuery() : IRequest<ApiResult<List<GetCurrenciesQueryResponseDto>>>;