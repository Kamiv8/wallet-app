using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Persistence.Repositories;

namespace WalletApp.Persistence;

public static class DI
{
    public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<WalletDbContext>(options =>
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

        services.AddScoped<IWalletDbContext, WalletDbContext>();
        services.AddScoped<IAccountRepository, AccountRepository>();
        services.AddScoped<ITokenRepository, TokenRepository>();
        
        
        return services;
    }
}