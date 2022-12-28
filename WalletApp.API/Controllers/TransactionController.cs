using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Models.commands.Transaction;
using WalletApp.API.Services;
using WalletApp.API.Authorization;
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
            Type = dto.Type
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
    public IActionResult GetTransactions()
    {
        return Ok();
    }
    
    // Get transaction details
    [HttpGet("{id}")]
    public IActionResult GetDetailsTransaction(string id)
    {
        return Ok();
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
    
    




}