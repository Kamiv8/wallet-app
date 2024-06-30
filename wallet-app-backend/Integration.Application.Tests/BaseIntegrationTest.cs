using MediatR;
using Microsoft.Extensions.DependencyInjection;
using WalletApp.Application.Interfaces;
using WalletApp.Persistance;

namespace Integration.Application.Tests;

public abstract class BaseIntegrationTest : IClassFixture<WebAppFactory>
{
    private readonly IServiceScope _scope;
    protected readonly ISender Sender;
    protected readonly WalletDbContext DbContext;
    protected readonly IUserManager AppUserManager;

    protected BaseIntegrationTest(WebAppFactory appFactory)
    {
        _scope = appFactory.Services.CreateScope();
        Sender = _scope.ServiceProvider.GetRequiredService<ISender>();
        DbContext = _scope.ServiceProvider.GetRequiredService<WalletDbContext>();
        AppUserManager = _scope.ServiceProvider.GetRequiredService<IUserManager>();
    }
}