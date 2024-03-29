using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Persistance.Repositories;
using WalletApp.Persistence.Repositories;

namespace WalletApp.Persistance;

public static class DI
{
    public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<WalletDbContext>(options =>
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

        services.AddScoped<ITokenRepository, TokenRepository>();
        services.AddScoped<ICurrencyRepository, CurrencyRepository>();
        services.AddScoped<IAccountDataRepository, AccountDataRepository>();
        services.AddScoped<IPermissionRepository, PermissionRepository>();
        services.AddScoped<ICategoryRepository, CategoryRepository>();
        services.AddScoped<ITransactionRepository, TransactionRepository>();
        services.AddScoped<IDefaultTransactionRepository, DefaultTransactionRepository>();
        services.AddScoped<INoteRepository, NoteRepository>();

        services.AddScoped<IUnitOfWork, UnitOfWork>();
        
        return services;
    }
}