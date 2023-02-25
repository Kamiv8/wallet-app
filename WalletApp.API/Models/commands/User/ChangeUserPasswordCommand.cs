using MediatR;

namespace WalletApp.API.Models.commands.User;

public class ChangeUserPasswordCommand: IRequest<Unit>
{
    public string OldPassword { get; set; }
    public string NewPassword { get; set; }
    public string ConfirmNewPassword { get; set; }
}