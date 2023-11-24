using MediatR;
using WalletApp.Application.Common;

namespace WalletApp.Application.Abstractions.Messaging;

public interface ICommand : IRequest<ApiResult> {}

public interface ICommand<TResponse> : IRequest<ApiResult<TResponse>> {}