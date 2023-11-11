using MediatR;
using WalletApp.Application.Common;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Account.Register;

public class RegisterCommandHandler : IRequestHandler<RegisterCommand, ApiResult>
{
    private readonly IAccountRepository _accountRepository;
    private readonly ITokenRepository _tokenRepository;
    private readonly IAccountDataRepository _accountDataRepository;

    public RegisterCommandHandler(IAccountRepository accountRepository,
        ITokenRepository tokenRepository, IAccountDataRepository accountDataRepository)
    {
        _accountRepository = accountRepository;
        _tokenRepository = tokenRepository;
        _accountDataRepository = accountDataRepository;
    }

    public async Task<ApiResult> Handle(RegisterCommand request,
        CancellationToken cancellationToken)
    {
        var user = await _accountRepository.GetAccountByEmail(request.Email);

        if (user is not null)
            return new ApiResult(ApiResultStatus.Error, "Email does exist");

        var entityAccount = new Domain.Entities.Account()
        {
            Username = request.Username,
            Email = request.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
            Icon = (int)request.IconType
        };


        var emptyToken = new Domain.Entities.Token()
        {
            RefreshToken = null,
            JWTToken = null,
            RefreshTokenExpiryTime = null,
            Account = entityAccount!
        };

        await _tokenRepository.CreateTokenRow(emptyToken);

        var accountData = new AccountData()
        {
            Account = entityAccount!,
            ActualMoney = 0,
        };

        await _accountDataRepository.CreateAsync(accountData);
        await _accountDataRepository.Save(cancellationToken);
        return new ApiResult(ApiResultStatus.Success, null);
    }
}