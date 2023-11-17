using Microsoft.AspNetCore.Authorization;
using WalletApp.Application.Enums;

namespace WalletApp.Application.Authentication;

public class PermissionRequirement : IAuthorizationRequirement
{
    public PermissionRequirement(string permission)
    {
        Permission = permission;
    }

    public string Permission { get; }
    
}