using Microsoft.Extensions.Logging;
using Quartz;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;
using WalletApp.Infrastructure.ExternalApi.NBP;

namespace WalletApp.Infrastructure.Quartz;

[DisallowConcurrentExecution]
public class CallToNbpApiJob : IJob
{
    private readonly ICurrencyRepository _currencyRepository;
    private readonly INbpClient _client;

    public CallToNbpApiJob(ICurrencyRepository currencyRepository, INbpClient client)
    {
        _currencyRepository = currencyRepository;
        _client = client;
    }
    
    public async Task Execute(IJobExecutionContext context)
    {
        var response = await _client.GetCurrencies(new CancellationToken());
        var deserializeData = ResultSerializer.Deserialize(response);
        var actualCurrency = await _currencyRepository.GetCurrency("EUR");
        var entityCurrencyList = deserializeData.Rates.Select(item => new Currency()
            {
                Ask = item.Ask,
                CurrencyName = item.Currency,
                Bid = item.Bid,
                Code = item.Code,
                TradingDate = DateTime.Parse(deserializeData.TradingDate)
            })
            .ToList();

        if (actualCurrency is null)
        {
            await _currencyRepository.AddRange(entityCurrencyList);
        }

        if (actualCurrency is not null && actualCurrency?.TradingDate != DateTime.Today.AddDays(-1))
        {
            _currencyRepository.UpdateRange(entityCurrencyList);
        }
        await _currencyRepository.Save(new CancellationToken());
    }
}