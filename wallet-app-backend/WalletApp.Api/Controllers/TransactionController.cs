using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Common;
using WalletApp.Application.Common.Transaction.AddUserTransaction;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;

[Authorize]
[Route("api/[controller]")]
public class TransactionController : BaseController
{
    private readonly IMediator _mediator;
    private readonly ICurrentUserService _currentUserService;

    public TransactionController(IMediator mediator, ICurrentUserService currentUserService)
    {
        _mediator = mediator;
        _currentUserService = currentUserService;
    }

    [HttpPost("addUserTransaction")]
    public async Task<ActionResult<ApiResult>> AddUserTransaction(
        [FromBody] AddUserTransactionCommandDto dto, CancellationToken cancellationToken)
    {
        var command = new AddUserTransactionCommand(
            _currentUserService.Id,
            dto.Title,
            dto.Price,
            dto.CurrencyId,
            dto.CategoryId,
            dto.Date,
            dto.IsDefault,
            dto.TextColor,
            dto.BackgroundColor
        );
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }
}