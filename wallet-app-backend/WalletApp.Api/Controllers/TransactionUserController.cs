using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Common;
using WalletApp.Application.Common.Transaction.AddUserTransaction;
using WalletApp.Application.Common.Transaction.AddUserTxDefault;
using WalletApp.Application.Common.Transaction.GetCostByCategory;
using WalletApp.Application.Common.Transaction.GetIncomeByCategory;
using WalletApp.Application.Common.Transaction.GetSumTransactions;
using WalletApp.Application.Common.Transaction.GetTransactionDetails;
using WalletApp.Application.Common.Transaction.GetTransactionList;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;

[Authorize]
[Route("api/[controller]")]
public class TransactionUserController : BaseController
{
    private readonly IMediator _mediator;
    private readonly ICurrentUserService _currentUserService;

    public TransactionUserController(IMediator mediator, ICurrentUserService currentUserService)
    {
        _mediator = mediator;
        _currentUserService = currentUserService;
    }

    [HttpPost("add")]
    public async Task<ActionResult<ApiResult>> AddUserTransaction(
        [FromBody] AddUserTransactionDto dto, CancellationToken cancellationToken)
    {
        var command = new AddUserTransactionCommand(
            _currentUserService.Id,
            dto.Title,
            dto.Price,
            dto.CurrencyId,
            dto.CategoryId,
            dto.Date,
            dto.IsDefault,
            dto.Description,
            dto.TextColor,
            dto.BackgroundColor
        );
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }
    
    [HttpPost("addDefault")]
    public async Task<ActionResult<ApiResult>> AddUserTransactionDefault(AddUserTxDefaultDto dto, CancellationToken cancellationToken)
    {
        var command = new AddUserTxDefaultCommand(_currentUserService.Id, dto.DefaultTransactionId);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }
    
    [HttpGet("transactionList")]
    public async Task<ActionResult<ApiResult<GetTransactionListResponseDto>>> GetAllTransactions(
        [FromQuery] GetTransactionListDto dto, CancellationToken cancellationToken)
    {
        var query = new GetTransactionListQuery(_currentUserService.Id, dto.PaginationParamsDto);
        var res = await _mediator.Send(query, cancellationToken);
        return CreateResponse(res);
    }

    [HttpGet("transactionsByCurrency")]
    public async Task<ActionResult<ApiResult<IEnumerable<IEnumerable<GetSumTransactionsResponseDto>>>>>
        GetSumTransactions(CancellationToken cancellationToken)
    {
        var query = new GetSumTransactionsQuery(_currentUserService.Id);
        var res = await _mediator.Send(query, cancellationToken);
        return CreateResponse(res);
    }

    [HttpGet("getIncomeByCategory")]
    public async Task<ActionResult<ApiResult<IEnumerable<GetIncomeByCategoryResponseDto>>>>
        GetIncomeByCategory([FromQuery] GetIncomeByCategoryDto dto,
            CancellationToken cancellationToken)
    {
        var query = new GetIncomeByCategoryQuery(_currentUserService.Id, dto.CurrencyId);
        var res = await _mediator.Send(query, cancellationToken);
        return CreateResponse(res);
    }

    [HttpGet("getCostByCategory")]
    public async Task<ActionResult<ApiResult<IEnumerable<GetCostByCategoryResponseDto>>>>
        GetCostByCategory([FromQuery] GetCostByCategoryDto dto,
            CancellationToken cancellationToken) => CreateResponse(
        await _mediator.Send(new GetCostByCategoryQuery(_currentUserService.Id, dto.CurrencyId),
            cancellationToken));

    [HttpGet("details")]
    public async Task<ActionResult<ApiResult<GetTransactionDetailsResponseDto>>>
        GetTransactionDetails([FromQuery] GetTransactionDetailsDto dto, CancellationToken cancellationToken) =>
        CreateResponse(await _mediator.Send(
            new GetTransactionDetailsQuery(_currentUserService.Id, dto.TransactionId),
            cancellationToken));
}