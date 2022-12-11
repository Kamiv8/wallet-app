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


var services = builder.Services;

services.AddTransient<WalletAppSeeder>();
services.AddDbContext<DataContext>(
    option => option.UseSqlServer(builder.Configuration.GetConnectionString("Database")));
builder.Services.AddCors(options => 
    options.AddPolicy(name: allowOrigins, policy =>
    {
        policy.WithOrigins("http://localhost:3000");
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    }));




services.AddAutoMapper(typeof(Program));
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
app.UseCors(allowOrigins);
app.UseAuthorization();
app.UseMiddleware<ErrorHandler>();
app.UseMiddleware<JwtMiddleware>();

app.MapControllers();

app.Run();