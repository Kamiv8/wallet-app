using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Category.DeleteUserCategory;

public sealed record DeleteUserCategoryCommand(Guid? UserId, Guid? CategoryId) : ICommand;