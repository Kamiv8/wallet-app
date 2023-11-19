using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.JsonWebTokens;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Authentication;

public class PermissionAuthorizationHandler : AuthorizationHandler<PermissionRequirement>
{
    private readonly IPermissionRepository _permissionRepository;

    public PermissionAuthorizationHandler(IPermissionRepository permissionRepository)
    {
        _permissionRepository = permissionRepository;
    }

    protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context,
        PermissionRequirement requirement)
    {
        var userId = context.User.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Sub)
            ?.Value;
        if (!Guid.TryParse(userId, out var parsedUserId)) return;

        var permissions = await _permissionRepository.GetPermissionAsync(parsedUserId);

        if (permissions.Contains(requirement.Permission))
        {
            context.Succeed(requirement);
        }
        
    }
}