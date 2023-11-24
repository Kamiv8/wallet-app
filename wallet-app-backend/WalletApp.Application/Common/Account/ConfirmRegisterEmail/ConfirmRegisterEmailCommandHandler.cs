using System.Text;
using Microsoft.AspNetCore.WebUtilities;
using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;

namespace WalletApp.Application.Common.Account.ConfirmRegisterEmail;

public class
    ConfirmRegisterEmailCommandHandler : ICommandHandler<ConfirmRegisterEmailCommand>
{
    private readonly IUserManager _userManager;

    public ConfirmRegisterEmailCommandHandler(IUserManager userManager)
    {
        _userManager = userManager;
    }

    public async Task<ApiResult> Handle(ConfirmRegisterEmailCommand request,
        CancellationToken cancellationToken)
    {
        var userIdentity = await _userManager.FindByEmailAsync(request.Email);

        if (userIdentity is null) return ApiResult.Error(AccountErrorMessages.UserNotExist);

        var decidedToken = WebEncoders.Base64UrlDecode(request.Token);
        var normalToken = Encoding.UTF8.GetString(decidedToken);

        var res = await _userManager.ConfirmEmail(userIdentity, normalToken);

        return !res.Succeeded
            ? ApiResult.Error(AccountErrorMessages.EmailNotConfirm)
            : ApiResult.Success();
    }
}