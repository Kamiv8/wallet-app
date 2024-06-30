using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Testcontainers.MsSql;
using WalletApp.Persistance;

namespace Integration.Application.Tests;

public class WebAppFactory : WebApplicationFactory<Program>, IAsyncLifetime
{

    private readonly MsSqlContainer _dbContainer = new MsSqlBuilder()
        .WithImage("mcr.microsoft.com/mssql/server:2022-latest")
        .WithPassword("yourStrong(!)Password")
        .Build();
    
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureTestServices(services =>
        {
            var descriptor = services.SingleOrDefault(x =>
                x.ServiceType == typeof(DbContextOptions<WalletDbContext>));

            if (descriptor is not null)
            {
                services.Remove(descriptor);
            }

            services.AddDbContext<WalletDbContext>(options =>
            {
                options.UseSqlServer(_dbContainer.GetConnectionString());
            });
            services.AddHttpContextAccessor();
        });
        
    }

    public  Task InitializeAsync()
    {
        return _dbContainer.StartAsync();
    }

    public new Task DisposeAsync()
    {
        return _dbContainer.StopAsync();
        
    }
}