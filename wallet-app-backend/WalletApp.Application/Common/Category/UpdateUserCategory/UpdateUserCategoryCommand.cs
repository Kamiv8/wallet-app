using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Category.UpdateUserCategory;

public sealed record UpdateUserCategoryCommand(Guid UserId, Guid? Id, string Name) : ICommand;