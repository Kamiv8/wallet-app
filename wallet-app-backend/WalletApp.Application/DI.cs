using System.Globalization;
using System.Reflection;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using WalletApp.Application.Behaviours;

namespace WalletApp.Application;

public static class DI
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
        ValidatorOptions.Global.LanguageManager.Enabled = false;
        ValidatorOptions.Global.LanguageManager.Culture = new CultureInfo("en-US");
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehaviour<,>));
        return services;
    }
}