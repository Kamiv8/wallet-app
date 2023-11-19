using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApp.Application.Common;
using WalletApp.Application.Common.Category.CreateCategory;
using WalletApp.Application.Common.Category.DeleteUserCategory;
using WalletApp.Application.Common.Category.GetUserCategories;
using WalletApp.Application.Common.Category.UpdateUserCategory;
using WalletApp.Application.Interfaces;

namespace WalletApp.Controllers;

[Authorize]
[Route("api/[controller]")]
public class CategoryController : BaseController
{
    private readonly IMediator _mediator;
    private readonly ICurrentUserService _userService;

    public CategoryController(IMediator mediator, ICurrentUserService userService)
    {
        _mediator = mediator;
        _userService = userService;
    }

    [HttpGet("userCategories")]
    public async Task<ActionResult<ApiResult<List<GetUserCategoriesResponseDto>>>>
        GetUserCategories(CancellationToken cancellationToken)
    {
        var query = new GetUserCategoriesQuery(_userService.Id);
        var res = await _mediator.Send(query, cancellationToken);
        return CreateResponse(res);
    }

    [HttpPost("createUserCategory")]
    public async Task<ActionResult<ApiResult>> CreateUserCategory([FromBody] CreateUserCategoryDto dto,
        CancellationToken cancellationToken)
    {
        var command = new CreateUserCategoryCommand(_userService.Id, dto.Name);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }

    [HttpPatch("updateUserCategory")]
    public async Task<ActionResult<ApiResult>> UpdateUserCategory([FromBody] UpdateUserCategoryCommandDto dto, CancellationToken cancellationToken)
    {
        var command = new UpdateUserCategoryCommand(_userService.Id, dto.CategoryId, dto.Name);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }

    [HttpDelete("deleteUserCategory/{id:guid}")]
    public async Task<ActionResult<ApiResult>> DeleteCategory(Guid id, CancellationToken cancellationToken)
    {
        var command = new DeleteUserCategoryCommand(_userService.Id, id);
        var res = await _mediator.Send(command, cancellationToken);
        return CreateResponse(res);
    }
}