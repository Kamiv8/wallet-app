using System.IdentityModel.Tokens.Jwt;
using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Authorization;
using Serilog;
using WalletApp.Application;
using WalletApp.Application.Authentication;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Options;
using WalletApp.Application.Options.EmailOptions;
using WalletApp.Application.Options.JwtOptionsSetup;
using WalletApp.Application.Options.NbpApi;
using WalletApp.Common.Helpers;
using WalletApp.Domain.Entities;
using WalletApp.Infrastructure;
using WalletApp.Middleware;
using WalletApp.Persistance;
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
builder.Services.AddScoped<IValidator<JwtOptions>, JwtOptionsValidation>();

builder.Services.AddOptions<EmailOptions>()
    .BindConfiguration("EmailService")
    .ValidateFluentValidation()
    .ValidateOnStart();

builder.Services.AddOptions<JwtOptions>()
    .BindConfiguration("JWTSettings")
    .ValidateFluentValidation()
    .ValidateOnStart();

builder.Services.AddOptions<NbpOptions>()
    .BindConfiguration("NbpApi")
    .ValidateFluentValidation()
    .ValidateOnStart();

builder.Services.AddIdentity<UserIdentity, RoleIdentity>(opt =>
    {
        opt.SignIn.RequireConfirmedEmail = true;
    })
    .AddEntityFrameworkStores<WalletDbContext>()
    .AddDefaultTokenProviders()
    .AddUserStore<UserStore<UserIdentity, RoleIdentity, WalletDbContext, Guid>>()
    .AddRoleStore<RoleStore<RoleIdentity, WalletDbContext, Guid>>();


builder.Services.AddAuthorization();
builder.Services.PostConfigure<JwtBearerOptions>(JwtBearerDefaults.AuthenticationScheme, options =>
{
    options.TokenValidationParameters.ValidateAudience = false;
    options.SecurityTokenValidators.Clear();
    options.SecurityTokenValidators.Add(new JwtSecurityTokenHandler());
});
builder.Services.AddTransient<IAuthorizationHandler, PermissionAuthorizationHandler>();
builder.Services
    .AddTransient<IAuthorizationPolicyProvider, PermissionAuthorizationPolicyProvider>();

builder.Services.ConfigureOptions<JwtOptionsSetup>();
builder.Services.AddPersistence(builder.Configuration);
builder.Services.AddApplication();
builder.Services.AddInfrastructure();


builder.Services.AddControllers(options =>
{
    var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
    options.Filters.Add(new AuthorizeFilter(policy));
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<
    IAuthorizationMiddlewareResultHandler, AuthorizationMiddlewareResultHandler>();
builder.Services.AddScoped<ICurrentUserService, CurrentUserService>();
builder.Services.AddScoped<ICookieHelper, CookieHelper>();
builder.Services.AddAppAuthentication(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())

{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(allowOrigins);
app.UseAuthentication();
app.UseMiddleware<ValidationErrorsMiddleware>();

app.UseAuthorization();
app.MapControllers();

app.Run();