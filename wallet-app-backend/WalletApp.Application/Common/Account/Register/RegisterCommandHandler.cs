using System.Text;
using System.Transactions;
using Microsoft.AspNetCore.WebUtilities;
using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Dtos;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace WalletApp.Application.Common.Account.Register;

public class RegisterCommandHandler : ICommandHandler<RegisterCommand>
{
    private readonly IUserManager _userManager;
    private readonly IAccountDataRepository _accountDataRepository;
    private readonly IEmailClient _emailClient;
    private readonly IEmailTemplates _emailTemplates;

    public RegisterCommandHandler(IUserManager userManager,
        IAccountDataRepository accountDataRepository, IEmailClient emailClient,
        IEmailTemplates emailTemplates)
    {
        _userManager = userManager;
        _accountDataRepository = accountDataRepository;
        _emailClient = emailClient;
        _emailTemplates = emailTemplates;
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

        var template = _emailTemplates.GetTemplate(EmailTemplate.REGISTER);
        var replace = template.Template
            .Replace("{0}", newUser.UserName)
            .Replace("{1}", request.Email)
            .Replace("{2}", validEmailToken)
            .Replace("{3}", "verify");
        await _emailClient.SendMailAsync(new EmailClientDto("Confirm Registration", "dbfs",
            replace,
            newUser.Email));

        transactionsScope.Complete();

        return ApiResult.Success(AccountErrorMessages.RegisterSuccess);
    }
}