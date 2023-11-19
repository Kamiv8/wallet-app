using MediatR;

namespace WalletApp.Application.Common.Category.DeleteUserCategory;

public sealed record DeleteUserCategoryCommand(Guid? UserId, Guid? CategoryId) : IRequest<ApiResult>;