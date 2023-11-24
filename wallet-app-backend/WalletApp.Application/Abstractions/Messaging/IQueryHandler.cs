using MediatR;
using WalletApp.Application.Common;

namespace WalletApp.Application.Abstractions.Messaging;

public interface IQueryHandler<TQuery, TResponse> : IRequestHandler<TQuery, ApiResult<TResponse>>
    where TQuery : IQuery<TResponse>
{
}