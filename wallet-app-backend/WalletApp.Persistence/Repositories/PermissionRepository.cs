using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;
using Permission = WalletApp.Application.Enums.Permission;

namespace WalletApp.Persistence.Repositories;

public class PermissionRepository : IPermissionRepository
{
    private readonly WalletDbContext _db;
    private readonly RoleManager<RoleIdentity> _roleManager;
    private readonly UserManager<UserIdentity> _userManager;

    public PermissionRepository(WalletDbContext db, RoleManager<RoleIdentity> roleManager,
        UserManager<UserIdentity> userManager)
    {
        _db = db;
        _roleManager = roleManager;
        _userManager = userManager;
    }

    public async Task<HashSet<string>> GetPermissionAsync(Guid userId)
    {
        var user = _userManager.Users.FirstOrDefault(x => x.Id == userId);

        var userRoles = await _userManager.GetRolesAsync(user!);
        var permissions = _db.Roles
            .Where(r => userRoles.Contains(r.Name))
            .SelectMany(r => r.Permissions)
            .Select(c => c.Name)
            .ToHashSet();

        return permissions;
    }
}