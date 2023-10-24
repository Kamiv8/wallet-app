using Microsoft.Extensions.DependencyInjection;
using WalletApp.Application.Interfaces;
using WalletApp.Infrastructure.JWT;

namespace WalletApp.Infrastructure;

public static class DI
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection serviceCollection)
    {

        serviceCollection.AddScoped<IJWTUtil, JWTUtil>();

        return serviceCollection;
    }
}