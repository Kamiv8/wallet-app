using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;

public class ReportsController : BaseController
{
    private readonly IMediator _mediator;
    private readonly ICurrentUserService _userService;

    public ReportsController(IMediator mediator, ICurrentUserService userService)
    {
        _mediator = mediator;
        _userService = userService;
    }
    
    
    // GET reports list
    
    // GET download report
    
    // POST generate report month
    
    // POST generate report year or all transactions
    
    
    
    
    
    
}