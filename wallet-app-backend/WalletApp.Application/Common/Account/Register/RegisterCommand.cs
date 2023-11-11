using MediatR;
using WalletApp.Application.Common;
using WalletApp.Application.Enums;

namespace WalletApp.Application.Account.Register;

public record RegisterCommand(string Username, string Email, string Password,
    string ConfirmPassword, IconType IconType) : IRequest<ApiResult>;