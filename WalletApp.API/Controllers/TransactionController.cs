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
    public IActionResult AddTransaction([FromBody] AddTransactionDTO dto, CancellationToken cancellationToken)
    {
        var command = new AddTransactionCommand()
        {
            Title = dto.Title,
            Price = dto.Price,
            Currency = dto.Currency,
            Category = dto.Category,
            Date = DateTime.Now,
            IsDefault = dto.IsDefault,
            TextColor = dto.TextColor,
            BackgroundColor = dto.BackgroundColor
        };
        
        var res = _mediator.Send(command, cancellationToken);
        
        return Ok(res);
    }
    
    // Edit transaction
    
    // delete transaction
    
    // Get transaction - paggination
    
    // Get transaction details
    
    // Get money array
    
    // Get grouped money by category income
    
    // Get grouped money by category cost
    
    // Get category transaction
    
    // Get saved transactions
    
    // Edit saved transaction
    
    // delete saved transaction
    
    




}