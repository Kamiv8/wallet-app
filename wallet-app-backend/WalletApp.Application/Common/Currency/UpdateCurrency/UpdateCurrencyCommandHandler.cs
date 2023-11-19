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

        var entityCurrencies = await _currencyRepository.GetCurrencies(cancellationToken);

        foreach (var currency in entityCurrencies)
        {
            var responseCurrency = response.Rates.FirstOrDefault(x => x.Code == currency.Code)!;
            currency.Ask = responseCurrency.Ask;
            currency.Bid = responseCurrency.Bid;
            currency.TradingDate = response.TradingDate;
        }

        await _currencyRepository.Save(cancellationToken);
    }
}