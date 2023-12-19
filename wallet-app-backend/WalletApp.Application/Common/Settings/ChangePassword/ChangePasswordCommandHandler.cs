using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Common.Account.ChangePassword;
using WalletApp.Application.Interfaces;

namespace WalletApp.Application.Common.Settings.ChangePassword;

public class ChangePasswordCommandHandler : ICommandHandler<ChangePasswordCommand>
{
    private readonly IUserManager _userManager;

    public ChangePasswordCommandHandler(IUserManager userManager)
    {
        _userManager = userManager;
    }

    public async Task<ApiResult> Handle(ChangePasswordCommand request,
        CancellationToken cancellationToken)
    {
        var user = await _userManager.FindByIdAsync(request.UserId);

        if (user is null) return ApiResult.Error(); // TODO

        await _userManager.ChangePasswordAsync(user, request.OldPassword,
            request.NewPassword);

        return ApiResult.Success();
    }
}