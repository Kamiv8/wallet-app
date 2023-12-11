using MediatR;
using WalletApp.Application.Abstractions.Messaging;

namespace WalletApp.Application.Common.Account.GetAccountData;

public sealed record GetAccountDataQuery(Guid UserId) : IQuery<GetAccountDataResponseDto>;