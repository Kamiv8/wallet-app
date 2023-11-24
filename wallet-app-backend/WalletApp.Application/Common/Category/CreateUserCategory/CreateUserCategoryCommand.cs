using MediatR;
using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Category.CreateUserCategory;

public sealed record CreateUserCategoryCommand(Guid UserId, string Name) : ICommand;
