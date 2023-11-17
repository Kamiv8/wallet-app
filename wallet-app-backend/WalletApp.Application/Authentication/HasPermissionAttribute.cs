using Microsoft.AspNetCore.Authorization;
using WalletApp.Application.Enums;

namespace WalletApp.Application.Authentication;

public class HasPermissionAttribute : AuthorizeAttribute
{
    public HasPermissionAttribute(Permission permission): base(policy: permission.ToString())
    {
        
    }
    
}