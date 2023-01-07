using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WalletApp.API.Models.commands.Transaction;
using WalletApp.API.Authorization;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.Category;
using WalletApp.API.Models.queries.Transaction;
using WalletApp.API.Models.Transaction;

namespace WalletApp.API.Controllers;


[ApiController]
[Authorize]
[Route("api/[controller]")]
public class TransactionController : BaseController
{
    private readonly IMediator _mediator;


    public TransactionController(IMediator mediator)
    {
        _mediator = mediator;
    }
    
    // Add transaction

    [HttpPost("add")]
    public async Task<IActionResult> AddTransaction([FromBody] AddTransactionDTO dto, CancellationToken cancellationToken)
    {
        var command = new AddTransactionCommand()
        {
            Title = dto.Title,
            Price = dto.Price,
            CurrencyId = dto.CurrencyId,
            CategoryId = dto.CategoryId,
            Date = dto.Date,
            IsDefault = dto.IsDefault,
            TextColor = dto.TextColor,
            BackgroundColor = dto.BackgroundColor,
            Type = dto.Type,
            Description = dto.Description
        };
        
        var res = await _mediator.Send(command, cancellationToken);
        
        return Ok(res);
    }
    
    // Edit transaction
    [HttpPut("{id}")]
    public IActionResult EditTransaction(string id)
    {
        return Ok();
    }
    
    // delete transaction
    [HttpDelete("{id}")]
    public IActionResult DeleteTransaction(string id)
    {
        return Ok();
    }
    
    // Get transactions - paggination
    [HttpGet]
    public async Task<ActionResult<PagingResult<GetAllTransactionDto>>> GetTransactions([FromQuery] PageDto dto, CancellationToken cancellationToken)
    {
        var query = new GetAllTransactionQuery
        {
            PageNumber = dto.PageNumber,
            PageSize = dto.PageSize,
            Type = dto.Type
        };

        var res = await _mediator.Send(query, cancellationToken);
        
        return Ok(res);
    }
    
    // Get transaction details
    [HttpGet("{id}")]
    public async Task<ActionResult<GetTransactionDetailsDto>> GetDetailsTransaction(Guid id, CancellationToken cancellationToken)
    {
        var query = new GetTransactionDetailsQuery
        {
            Id = id
        };

        var res = await _mediator.Send(query, cancellationToken);
        return Ok(res);
    }
    
    // Edit saved transaction
    [HttpPut("saved/{id}")]
    public IActionResult EditSavedTransaction(string id)
    {
        return Ok();
    }
    
    
    // delete saved transaction
    [HttpDelete("saved/{id}")]
    public IActionResult DeleteSavedTransaction(string id)
    {
        return Ok();
    }
    
    // GET all default transaction
    [HttpGet("default")]
    public async Task<ActionResult<List<GetAllTransactionDto>>> GetAllDefaultTransaction(CancellationToken cancellationToken)
    {
        var query = new GetAllDefaultTransactionsQuery();
        var res = await _mediator.Send(query, cancellationToken);
        return Ok(res);
    }
    // GET to money chart
    [HttpGet("moneyChart")]
    public async Task<IActionResult> GetAllTransactionToMoneyChart(CancellationToken cancellationToken)
    {
        var query = new GetToMoneyChartQuery();

        var res = await _mediator.Send(query, cancellationToken);

        return Ok(res);
    }
    
    //GET to incomeChart
    [HttpGet("incomeChart")]
    public async Task<ActionResult<List<ToChartModelDto>>> GetTransactionsToIncomeChart(CancellationToken cancellationToken)
    {
        var query = new GetToIncomeChartQuery();
        var res = await _mediator.Send(query, cancellationToken);
        return Ok(res);
    }
    
    
    // GET to costChart
    [HttpGet("costChart")]
    public async Task<ActionResult<List<ToChartModelDto>>> GetTransactionsToCostChart(
        CancellationToken cancellationToken)
    {
        var query = new GetToCostChartQuery();

        var res = await _mediator.Send(query, cancellationToken);

        return Ok(res);
    }





}