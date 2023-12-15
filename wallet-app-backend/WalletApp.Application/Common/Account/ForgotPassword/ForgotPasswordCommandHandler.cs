using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Dtos;
using WalletApp.Application.Interfaces;

namespace WalletApp.Application.Common.Account.ForgotPassword;

public class ForgotPasswordCommandHandler : ICommandHandler<ForgotPasswordCommand>
{
    private readonly IUserManager _userManager;
    private readonly IEmailClient _emailClient;

    public ForgotPasswordCommandHandler(IUserManager userManager, IEmailClient emailClient)
    {
        _userManager = userManager;
        _emailClient = emailClient;
    }


    public async Task<ApiResult> Handle(ForgotPasswordCommand request, CancellationToken cancellationToken)
    {

        var user = await _userManager.FindByEmailAsync(request.Email);
        if (user is null) return ApiResult.Error(AccountErrorMessages.EmailNotExist);

        var token = await _userManager.GeneratePasswordResetTokenAsync(user);

        await _emailClient.SendMailAsync(new EmailClientDto("Forgot Password", "Kliknij do nowego konta",
            $"""<a href="http://localhost:3000/resetPassword/{request.Email}/{token}">Click to activation</a>""", request.Email)); // TODO

        return ApiResult.Success();
    }
}