using Microsoft.Extensions.DependencyInjection;
using Quartz;
using WalletApp.Application.Interfaces;
using WalletApp.Infractructure.ExternalApi.NBP;
using WalletApp.Infractructure.JWT;
using WalletApp.Infractructure.Quartz;
using WalletApp.Infractructure.UserManager;

namespace WalletApp.Infractructure;

public static class DI
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection serviceCollection)
    {
        
        serviceCollection.AddScoped<IJWTUtil, JWTUtil>();
        serviceCollection.AddSingleton<INbpClient, NbpClient>();
        serviceCollection.AddScoped<IEmailClient, EmailClient.EmailClient>();
        serviceCollection.AddScoped<IUserManager, AppUserManager>();
        serviceCollection.AddScoped<IAppSignInManager, AppSignInManager.AppSignInManager>();
        serviceCollection.AddQuartz(q =>
        {
            q.UseMicrosoftDependencyInjectionJobFactory();
            var jobKey = new JobKey("NBP");

            q.AddJob<CallToNbpApiJob>(jobBuilder => jobBuilder.WithIdentity(jobKey));
            q.AddTrigger(trigger =>
            {
                trigger.ForJob(jobKey).WithIdentity("NBP-trigger").WithSimpleSchedule(schedule =>
                {
                    schedule.WithIntervalInHours(24).RepeatForever();
                });
            });
        });
        
        serviceCollection.AddQuartzHostedService(options =>
        {
            options.WaitForJobsToComplete = true;
        });
        



        return serviceCollection;
    }
}