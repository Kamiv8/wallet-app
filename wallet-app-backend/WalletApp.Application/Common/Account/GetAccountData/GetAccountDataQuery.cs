using MediatR;
using WalletApp.Application.Common;

namespace WalletApp.Application.Account.GetAccountData;

public sealed record GetAccountDataQuery : IRequest<ApiResult<GetAccountDataDto>>;