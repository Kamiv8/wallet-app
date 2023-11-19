using MediatR;

namespace WalletApp.Application.Common.Category.CreateCategory;

public sealed record CreateUserCategoryCommand(Guid? UserId, string Name) : IRequest<ApiResult>;
