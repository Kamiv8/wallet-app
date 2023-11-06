using MediatR;

namespace WalletApp.Application.Account.Authenticate;

public record AuthenticateCommand(string Email, string Password) : IRequest<AuthenticateDto>;