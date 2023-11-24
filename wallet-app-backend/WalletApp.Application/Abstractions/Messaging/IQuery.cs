using MediatR;
using WalletApp.Application.Common;

namespace WalletApp.Application.Abstractions.Messaging;

public interface IQuery<TResponse> : IRequest<ApiResult<TResponse>>
{
}