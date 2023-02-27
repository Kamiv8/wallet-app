using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletApp.API.Authorization;
using WalletApp.API.Entities;
using WalletApp.API.Models.Category;
using WalletApp.API.Models.commands.Category;
using WalletApp.API.Models.queries.Categories;

namespace WalletApp.API.Controllers;


[Authorize]
[ApiController]
[Route("api/[controller]")]
public class CategoryController : ControllerBase
{
    private readonly IMediator _mediator;


    public CategoryController(IMediator mediator)
    {
        _mediator = mediator;
    }
    
    
    // Get user category and default
    [HttpGet]
    public async Task<ActionResult<List<DefaultCategoryDto>>> GetCategories(CancellationToken cancellationToken)
    {
        var query = new CategoriesQuery();

        var res = await _mediator.Send(query, cancellationToken);

        return Ok(res);
    }

    [HttpGet("default")]
    public async Task<ActionResult<List<DefaultCategoryDto>>> GetDefault(CancellationToken cancellationToken)
    {
        var query = new DefaultCategoriesQuery();

        var res = await _mediator.Send(query, cancellationToken);

        return Ok(res);
    }

    // create category
    [HttpPost]
    public async Task<IActionResult> CreateCategory([FromBody] CreateCategoryDto dto,
        CancellationToken cancellationToken)
    {
        var command = new CreateCategoryCommand()
        {
            Name = dto.Name
        };

        await _mediator.Send(command, cancellationToken);

        return Ok(new { message = "Created category successful" });
    }
    // update category
    [HttpPatch]
    public async Task<IActionResult> UpdateCategory([FromBody] UpdateCategoryDto dto,
        CancellationToken cancellationToken)
    {
        var command = new UpdateCategoryCommand()
        {
            CategoryId = dto.CategoryId,
            Name = dto.Name
        };

        await _mediator.Send(command, cancellationToken);

        return Ok(new { message = "Updated category successful" });
    }


    // delete category
    [HttpDelete("{id}")] 
    public async Task<IActionResult> DeleteCategory(Guid id, CancellationToken cancellationToken)
    {
        var command = new DeleteCategoryCommand()
        {
            CategoryId = id
        };

        await _mediator.Send(command, cancellationToken);

        return Ok(new {message = "Deleted category successful"});
    }
}