using MediatR;
using Microsoft.Extensions.Logging;
using Quartz;
using WalletApp.Application.Common.Currency.Update;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;
using WalletApp.Infrastructure.ExternalApi.NBP;

namespace WalletApp.Infrastructure.Quartz;

[DisallowConcurrentExecution]
public class CallToNbpApiJob : IJob
{
    private readonly IMediator _mediator;
    private readonly ICurrencyRepository _currencyRepository;
    private readonly INbpClient _client;

    public CallToNbpApiJob(IMediator mediator, ICurrencyRepository currencyRepository, INbpClient client)
    {
        _mediator = mediator;
        _currencyRepository = currencyRepository;
        _client = client;
    }
    
    public async Task Execute(IJobExecutionContext context)
    {
        var command = new UpdateCurrencyCommand();
        await _mediator.Send(command, new CancellationToken());
    }
}