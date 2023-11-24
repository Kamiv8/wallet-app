using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Currency.GetCurrencies;

public class GetCurrenciesQueryHandler : IQueryHandler<GetCurrenciesQuery,
    IEnumerable<GetCurrenciesQueryResponseDto>>
{
    private readonly ICurrencyRepository _repository;

    public GetCurrenciesQueryHandler(ICurrencyRepository repository)
    {
        _repository = repository;
    }

    public async Task<ApiResult<IEnumerable<GetCurrenciesQueryResponseDto>>> Handle(
        GetCurrenciesQuery request,
        CancellationToken cancellationToken)
    {
        var entityCurrencies = await _repository.GetCurrencies(cancellationToken);

        var response = entityCurrencies.Select(currency =>
                new GetCurrenciesQueryResponseDto(currency.Id, currency.CurrencyName,
                    currency.Code))
            .ToList();

        return ApiResult<IEnumerable<GetCurrenciesQueryResponseDto>>.Success(response);
    }
}