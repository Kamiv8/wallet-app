using Microsoft.Extensions.DependencyInjection.Extensions;
using Serilog;
using WalletApp.Application;
using WalletApp.Application.Interfaces;
using WalletApp.Filters;
using WalletApp.Infrastructure;
using WalletApp.Middleware;
using WalletApp.Persistence;
using WalletApp.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog(
    (HostBuilderContext context, IServiceProvider services, LoggerConfiguration loggerConfiguration) =>
    {
        loggerConfiguration.ReadFrom.Configuration(context.Configuration).ReadFrom.Services(services);
    });
builder.Services.AddHttpContextAccessor();
builder.Services.AddHttpClient();
builder.Services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
builder.Services.Configure<JWTConfig>(builder.Configuration.GetSection("JWTSettings"));
builder.Services.AddPersistence(builder.Configuration);
builder.Services.AddApplication();
builder.Services.AddInfrastructure();
builder.Services.AddScoped<ICurrentUserService, CurrentUserService>();
builder.Services.AddControllers(options =>
{
    options.Filters.Add<ResultMappingActionFilter>();
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

app.UseHttpsRedirection();
app.UseErrorMiddleware();
app.UseAuthorization();

app.UseJwtMiddleware();
app.MapControllers();

app.Run();