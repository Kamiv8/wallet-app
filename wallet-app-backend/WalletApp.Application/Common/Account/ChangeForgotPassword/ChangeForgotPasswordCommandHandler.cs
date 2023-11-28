using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;

namespace WalletApp.Application.Common.Account.ChangeForgotPassword;

public class ChangeForgotPasswordCommandHandler : ICommandHandler<ChangeForgotPasswordCommand>
{
    private readonly IUserManager _userManager;

    public ChangeForgotPasswordCommandHandler(IUserManager userManager)
    {
        _userManager = userManager;
    }

    public async Task<ApiResult> Handle(ChangeForgotPasswordCommand request,
        CancellationToken cancellationToken)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);

        if (user is null) return ApiResult.Error(AccountErrorMessages.UserNotExist);

        var resetPassword =
            await _userManager.ResetPasswordAsync(user, request.Token, request.Password);

        return !resetPassword.Succeeded
            ? ApiResult.Error(AccountErrorMessages.CannotResetPassword)
            : ApiResult.Success(AccountErrorMessages.ResetPasswordSuccessful);
    }
}