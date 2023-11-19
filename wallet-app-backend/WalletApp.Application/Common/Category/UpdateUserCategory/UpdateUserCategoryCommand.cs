using MediatR;

namespace WalletApp.Application.Common.Category.UpdateUserCategory;

public sealed record UpdateUserCategoryCommand(Guid? UserId, Guid? Id, string Name) : IRequest<ApiResult>;