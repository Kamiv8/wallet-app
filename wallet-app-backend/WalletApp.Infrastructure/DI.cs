using Microsoft.Extensions.DependencyInjection;
using Quartz;
using Quartz.Impl;
using WalletApp.Application.Interfaces;
using WalletApp.Infrastructure.ExternalApi.NBP;
using WalletApp.Infrastructure.JWT;
using WalletApp.Infrastructure.Quartz;

namespace WalletApp.Infrastructure;

public static class DI
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection serviceCollection)
    {
        
        serviceCollection.AddScoped<IJWTUtil, JWTUtil>();
        serviceCollection.AddSingleton<INbpClient, NbpClient>();
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