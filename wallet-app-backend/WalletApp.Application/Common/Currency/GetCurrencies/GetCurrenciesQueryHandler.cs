using MediatR;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Currency.GetCurrency;

public class GetCurrenciesQueryHandler : IRequestHandler<GetCurrenciesQuery,
    ApiResult<List<GetCurrenciesQueryResponseDto>>>
{
    private readonly ICurrencyRepository _repository;


    public GetCurrenciesQueryHandler(ICurrencyRepository repository)
    {
        _repository = repository;
    }


    public async Task<ApiResult<List<GetCurrenciesQueryResponseDto>>> Handle(
        GetCurrenciesQuery request,
        CancellationToken cancellationToken)
    {
        var entityCurrencies = await _repository.GetCurrencies(cancellationToken);

        var response = entityCurrencies.Select(currency =>
                new GetCurrenciesQueryResponseDto(currency.Id, currency.CurrencyName,
                    currency.Code))
            .ToList();

        return ApiResult<List<GetCurrenciesQueryResponseDto>>.Success(response);
    }
}