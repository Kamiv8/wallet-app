using MediatR;
using WalletApp.Application.Common;

namespace WalletApp.Application.Abstractions.Messaging;

public interface ICommandHandler<TCommand> : IRequestHandler<TCommand, ApiResult>
    where TCommand : ICommand
{
}

public interface
    ICommandHandler<TCommand, TResponse> : IRequestHandler<TCommand, ApiResult<TResponse>>
    where TCommand : ICommand<TResponse>
{
}