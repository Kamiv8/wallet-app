using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace WalletApp.Persistance;

public static class MigrationExtensions
{
    public static void AppMigrations(this IApplicationBuilder app)
    {
        using IServiceScope scope = app.ApplicationServices.CreateScope();
        using WalletDbContext dbContext =
            scope.ServiceProvider.GetRequiredService<WalletDbContext>();
        
        dbContext.Database.Migrate();

    }
}