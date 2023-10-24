using MediatR;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Common;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Account.Register;

public class RegisterCommandHandler : IRequestHandler<RegisterCommand>
{
    private readonly IAccountRepository _accountRepository;
    private readonly ITokenRepository _tokenRepository;

    public RegisterCommandHandler(IAccountRepository accountRepository, ITokenRepository tokenRepository)
    {
        _accountRepository = accountRepository;
        _tokenRepository = tokenRepository;
    }
    
    public async Task Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        var user = await _accountRepository.GetAccountByEmail(request.Email);

        if (user is not null)
            throw new ErrorDetails("Email does exist");

        var entityAccount = new Domain.Entities.Account()
        {
            Username = request.Username,
            Email = request.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
            Icon = request.Icon
        };


        
        await _accountRepository.CreateAccount(entityAccount);
        await _accountRepository.Save(cancellationToken);
        
        var emptyToken = new Token()
        {
            RefreshToken = null,
            JWTToken = null,
            RefreshTokenExpiryTime = null,
            Account = await _accountRepository.GetAccountByEmail(request.Email),
        };

        await _tokenRepository.CreateTokenRow(emptyToken);

        await _tokenRepository.Save(cancellationToken);


    }
}