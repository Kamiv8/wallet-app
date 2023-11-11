using System.IdentityModel.Tokens.Jwt;
using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using Serilog;
using WalletApp.Application;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Options;
using WalletApp.Application.Options.JwtOptionsSetup;
using WalletApp.Common.Helpers;
using WalletApp.Infrastructure;
using WalletApp.Persistence;
using WalletApp.Services;

var builder = WebApplication.CreateBuilder(args);
var allowOrigins = "_myOrigins";
builder.Host.UseSerilog(
    (context, services, loggerConfiguration) =>
    {
        loggerConfiguration.ReadFrom.Configuration(context.Configuration).ReadFrom
            .Services(services);
    });
builder.Services.AddCors(options =>
    options.AddPolicy(name: allowOrigins, policy =>
    {
        policy.WithOrigins("http://localhost:3000");
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
        policy.AllowCredentials();
    }));

builder.Services.AddHttpContextAccessor();
builder.Services.AddHttpClient();
builder.Services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
builder.Services.AddScoped<IValidator<JwtOptions>, JwtOptionsValidation>();
builder.Services.AddOptions<JwtOptions>()
    .BindConfiguration("JWTSettings")
    .ValidateFluentValidation()
    .ValidateOnStart();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
builder.Services.AddAuthorization();
builder.Services.PostConfigure<JwtBearerOptions>(JwtBearerDefaults.AuthenticationScheme, options =>
{
    options.TokenValidationParameters.ValidateAudience = false;
    options.SecurityTokenValidators.Clear();
    options.SecurityTokenValidators.Add(new JwtSecurityTokenHandler());
});
builder.Services.ConfigureOptions<JwtOptionsSetup>();
builder.Services.AddPersistence(builder.Configuration);
builder.Services.AddApplication();
builder.Services.AddInfrastructure();
builder.Services.AddScoped<ICurrentUserService, CurrentUserService>();
builder.Services.AddScoped<ICookieHelper, CookieHelper>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(allowOrigins);
app.UseAuthentication();

app.UseAuthorization();
app.MapControllers();

app.Run();