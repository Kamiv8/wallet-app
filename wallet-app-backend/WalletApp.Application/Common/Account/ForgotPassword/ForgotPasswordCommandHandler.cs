using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Dtos;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;

namespace WalletApp.Application.Common.Account.ForgotPassword;

public class ForgotPasswordCommandHandler : ICommandHandler<ForgotPasswordCommand>
{
    private readonly IUserManager _userManager;
    private readonly IEmailClient _emailClient;
    private readonly IEmailTemplates _emailTemplates;

    public ForgotPasswordCommandHandler(IUserManager userManager, IEmailClient emailClient,
        IEmailTemplates emailTemplates)
    {
        _userManager = userManager;
        _emailClient = emailClient;
        _emailTemplates = emailTemplates;
    }


    public async Task<ApiResult> Handle(ForgotPasswordCommand request,
        CancellationToken cancellationToken)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);
        if (user is null) return ApiResult.Success(AccountErrorMessages.ResetPasswordSentMail);

        var token = await _userManager.GeneratePasswordResetTokenAsync(user);
        if (token == string.Empty) return ApiResult.Error(CommonErrorMessages.CommonError);

        var template = _emailTemplates.GetTemplate(EmailTemplate.FORGOT_PASSWORD);

        var replace = template.Template.Replace("{0}", user.UserName)
            .Replace("{1}", request.Email)
            .Replace("{2}", token)
            .Replace("{3}", "resetPassword");

        var emailDto = new EmailClientDto("Forgot Password", "dsa",
            replace,
            request.Email);

        await _emailClient.SendMailAsync(emailDto);

        return ApiResult.Success(AccountErrorMessages.ResetPasswordSentMail);
    }
}