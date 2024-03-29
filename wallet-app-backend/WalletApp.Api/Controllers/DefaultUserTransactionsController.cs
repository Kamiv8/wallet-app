using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Common;
using WalletApp.Application.Common.DefaultTransaction.DeleteDefaultUserTransaction;
using WalletApp.Application.Common.DefaultTransaction.EditDefaultUserTransaction;
using WalletApp.Application.Common.DefaultTransaction.GetDefaultUserTransactions;
using WalletApp.Application.Common.Transaction.AddUserTxDefault;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;

[Authorize]
[Route("/api/[controller]")]
public class DefaultUserTransactionsController : BaseController
{
    private readonly IMediator _mediator;
    private readonly ICurrentUserService _userService;

    public DefaultUserTransactionsController(IMediator mediator, ICurrentUserService userService)
    {
        _mediator = mediator;
        _userService = userService;
    }

    [HttpGet]
    public async
        Task<ActionResult<ApiResult<IReadOnlyCollection<GetDefaultUserTransactionResponseDto>>>>
        GetDefaultUserTransactions(CancellationToken cancellationToken)
    {
        var query = new GetDefaultUserTransactionsQuery(_userService.Id);
        var res = await _mediator.Send(query, cancellationToken);
        return CreateResponse(res);
    }

    [HttpPost("addDefault")]
    public async Task<ActionResult<ApiResult>> AddUserTransactionDefault(AddUserTxDefaultDto dto, CancellationToken cancellationToken)
    {
        var command = new AddUserTxDefaultCommand(_userService.Id, dto.DefaultTransactionId);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }
    
    [HttpPut]
    public async Task<ActionResult<ApiResult>> EditDefaultUserTransaction(
        [FromBody] EditDefaultUserTransactionDto dto, CancellationToken cancellationToken)
    {
        var command = new EditDefaultUserTransactionCommand(dto.Id, dto.Title, dto.Price,
            dto.CurrencyId, dto.CategoryId, dto.TextColor, dto.BackgroundColor, dto.Description);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult<ApiResult>> DeleteDefaultUserTransaction(Guid id,
        CancellationToken cancellationToken)
    {
        var command = new DeleteDefaultUserTransactionCommand(id);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }
}