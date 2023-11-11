using MediatR;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Enums;

namespace WalletApp.Application.Common.Currency.Update;

public class UpdateCurrencyCommandHandler : IRequestHandler<UpdateCurrencyCommand>
{
    private readonly ICurrencyRepository _currencyRepository;
    private readonly INbpClient _client;

    public UpdateCurrencyCommandHandler(ICurrencyRepository currencyRepository, INbpClient client)
    {
        _currencyRepository = currencyRepository;
        _client = client;
    }


    public async Task Handle(UpdateCurrencyCommand request, CancellationToken cancellationToken)
    {
        var response = await _client.GetCurrencies(cancellationToken);
        var enabledCurrencies = new[]
        {
            Enum.GetName(EnabledCurrency.EUR),
            Enum.GetName(EnabledCurrency.CHF),
            Enum.GetName(EnabledCurrency.GBP),
            Enum.GetName(EnabledCurrency.USD),
        };

        response.Rates = response.Rates.Where(x => enabledCurrencies.Contains(x.Code)).ToList();
        var entityCurrencyList = response.Rates.Select(item => new Domain.Entities.Currency()
            {
                Ask = item.Ask,
                CurrencyName = item.Currency,
                Bid = item.Bid,
                Code = item.Code,
                TradingDate = DateTime.Parse(response.TradingDate)
            })
            .ToList();

        var entityCurrencies = await _currencyRepository.GetCurrencies(cancellationToken);

        _currencyRepository.RemoveRange(entityCurrencies);

        await _currencyRepository.AddRange(entityCurrencyList);
        
        await _currencyRepository.Save(cancellationToken);
    }
}