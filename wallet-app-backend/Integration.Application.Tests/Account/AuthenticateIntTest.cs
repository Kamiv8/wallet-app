using System.Text;
using Microsoft.AspNetCore.WebUtilities;
using WalletApp.Application.Common.Account.Authenticate;
using WalletApp.Application.Common.Account.ConfirmRegisterEmail;
using WalletApp.Application.Common.Account.Register;
using WalletApp.Domain.Enums;

namespace Integration.Application.Tests.Account;

public class AuthenticateIntTest(WebAppFactory appFactory) : BaseIntegrationTest(appFactory)
{

    [Fact]
    public async Task Authenticate_ShouldReturn_AccessTokens()
    {
        var registerCommand = new RegisterCommand("kamiv8", "test@test.com", "Abcd123@", "Abcd123@",
            IconType.Boy);
        await Sender.Send(registerCommand);
        var user = DbContext.Users.FirstOrDefault(x => x.UserName == "kamiv8");
        var registerToken = await AppUserManager.GenerateEmailConfirmationTokenAsync(user);
        var encodedEmailToken = Encoding.UTF8.GetBytes(registerToken);
        var validEmailToken = WebEncoders.Base64UrlEncode(encodedEmailToken);
        var confirmCommand = new ConfirmRegisterEmailCommand("test@test.com", validEmailToken);
        await Sender.Send(confirmCommand);
        // var user2 = DbContext.Users.FirstOrDefault(x => x.UserName == "kamiv8");

        var authCommand = new AuthenticateCommand("kamiv8", "Abcd123@", "0,0,0,1");
        
        var res = await Sender.Send(authCommand);

        Assert.NotNull(res.Data);
    }
    
}