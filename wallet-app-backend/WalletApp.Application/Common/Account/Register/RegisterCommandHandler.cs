using MediatR;
using Microsoft.AspNetCore.Identity;
using WalletApp.Application.Common;
using WalletApp.Application.Consts;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Account.Register;

public class RegisterCommandHandler : IRequestHandler<RegisterCommand, ApiResult>
{
    private readonly UserManager<UserIdentity> _userManager;
    private readonly IAccountDataRepository _accountDataRepository;

    public RegisterCommandHandler(UserManager<UserIdentity> userManager,
        IAccountDataRepository accountDataRepository)
    {
        _userManager = userManager;
        _accountDataRepository = accountDataRepository;
    }

    public async Task<ApiResult> Handle(RegisterCommand request,
        CancellationToken cancellationToken)
    {
        var entityUser = await _userManager.FindByEmailAsync(request.Email);
        if (entityUser is not null)
            return ApiResult.Error(AccountErrorMessages.EmailNotExist);

        var newUser = new UserIdentity
        {
            Email = request.Email,
            UserName = request.Username,
            IconType = request.IconType
        };

        var accountData = new AccountData
        {
            UserIdentity = newUser!,
            ActualMoney = 0,
        };

        await _accountDataRepository.CreateAsync(accountData);
        await _userManager.CreateAsync(newUser, request.Password);
        return ApiResult.Success();
    }
}