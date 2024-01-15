using System.Text;
using System.Transactions;
using Microsoft.AspNetCore.WebUtilities;
using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Dtos;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Common.Account.Register;

public class RegisterCommandHandler : ICommandHandler<RegisterCommand>
{
    private readonly IUserManager _userManager;
    private readonly IAccountDataRepository _accountDataRepository;
    private readonly IEmailClient _emailClient;

    public RegisterCommandHandler(IUserManager userManager,
        IAccountDataRepository accountDataRepository, IEmailClient emailClient)
    {
        _userManager = userManager;
        _accountDataRepository = accountDataRepository;
        _emailClient = emailClient;
    }

    public async Task<ApiResult> Handle(RegisterCommand request,
        CancellationToken cancellationToken)
    {
        using var transactionsScope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled);

        var entityUser = await _userManager.FindByEmailAsync(request.Email);
        if (entityUser is not null)
            return ApiResult.Error(AccountErrorMessages.EmailNotExist);

        var newUser = new UserIdentity
        {
            Email = request.Email,
            UserName = request.Username,
            IconType = request.IconType,
        };

        var accountData = new AccountData
        {
            UserIdentity = newUser,
            ActualMoneyUsd = 0,
            ActualMoneyEur = 0,
            ActualMoneyGbp = 0,
            ActualMoneyChf = 0,
            ActualMoneyPln = 0,
        };

        await _accountDataRepository.CreateAsync(accountData);
        var result = await _userManager.CreateAsync(newUser, request.Password);
        if (!result.Succeeded) return ApiResult.Error(AccountErrorMessages.EmailExist);

        var registerToken = await _userManager.GenerateEmailConfirmationTokenAsync(newUser);

        var encodedEmailToken = Encoding.UTF8.GetBytes(registerToken);
        var validEmailToken = WebEncoders.Base64UrlEncode(encodedEmailToken);

        await _emailClient.SendMailAsync(new EmailClientDto("dsa", "dsada", // TODO add subject and template
            $"""<a href="http://localhost:3000/verify/{request.Email}/{validEmailToken}">Click link</a>""",
            newUser.Email));

        transactionsScope.Complete();

        return ApiResult.Success(AccountErrorMessages.RegisterSuccess);
    }
}