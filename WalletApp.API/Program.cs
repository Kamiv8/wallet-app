using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection.Extensions;
using WalletApp.API.Authorization;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Services;

var builder = WebApplication.CreateBuilder(args);
var allowOrigins = "_myOrigins";
// Add services to the container.
var automapper = new MapperConfiguration(item => item.AddProfile(new WalletApp.API.Helpers.AutoMapper()));
var mapper = automapper.CreateMapper();


var services = builder.Services;

services.AddTransient<WalletAppSeeder>();
services.AddDbContext<DataContext>(
    option => option.UseSqlServer(builder.Configuration.GetConnectionString("Database")));
builder.Services.AddCors(options => 
    options.AddPolicy(name: allowOrigins, policy =>
    {
        policy.AllowAnyOrigin();
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    }));




services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();
services.AddMediatR(typeof(Program));

services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
services.AddHttpContextAccessor();
services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
services.AddScoped<IJwtUtils, JwtUtils>();
services.AddScoped<IEmailService, EmailService>();
services.AddScoped<IUserService, UserService>();
services.AddScoped<IAuthService, AuthService>();
services.AddSingleton(mapper);



void SeedData(IHost app)
{
    var scopedFactory = app.Services.GetService<IServiceScopeFactory>();

    using (var scope = scopedFactory.CreateScope())
    {
        var service = scope.ServiceProvider.GetService<WalletAppSeeder>();
        service.Seed();
    }
}


var app = builder.Build();


SeedData(app);

// Configure the HTTP request pipeline.

if (true)
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseMiddleware<ErrorHandler>();
app.UseMiddleware<JwtMiddleware>();
app.UseCors(allowOrigins);
app.UseAuthorization();


app.MapControllers();

app.Run();