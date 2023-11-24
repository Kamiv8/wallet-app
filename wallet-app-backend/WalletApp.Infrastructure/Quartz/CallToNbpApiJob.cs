using MediatR;
using Quartz;
using WalletApp.Application.Common.Currency.UpdateCurrency;

namespace WalletApp.Infractructure.Quartz;

[DisallowConcurrentExecution]
public class CallToNbpApiJob : IJob
{
    private readonly IMediator _mediator;

    public CallToNbpApiJob(IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task Execute(IJobExecutionContext context)
    {
        var command = new UpdateCurrencyCommand();
        await _mediator.Send(command, context.CancellationToken);
    }
}