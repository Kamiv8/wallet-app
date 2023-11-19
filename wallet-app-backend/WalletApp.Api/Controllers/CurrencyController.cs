using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Common;
using WalletApp.Application.Common.Currency.GetCurrency;

namespace WalletApp.Controllers;

[Authorize]
[Route("api/[controller]")]
public class CurrencyController : BaseController
{
    private readonly IMediator _mediator;

    public CurrencyController(IMediator mediator)
    {
        _mediator = mediator;
    }


    [HttpGet]
    public async Task<ActionResult<ApiResult<List<GetCurrenciesQueryResponseDto>>>> GetCurrencies(
        CancellationToken cancellationToken)
    {
        var query = new GetCurrenciesQuery();
        var res = await _mediator.Send(query, cancellationToken);
        return CreateResponse(res);
    }
}