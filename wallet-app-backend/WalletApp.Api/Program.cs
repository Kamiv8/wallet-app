using WalletApp.Application;
using WalletApp.Filters;
using WalletApp.Infrastructure;
using WalletApp.Middleware;
using WalletApp.Persistence;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<JWTConfig>(builder.Configuration.GetSection("JWTSettings"));
builder.Services.AddPersistence(builder.Configuration);
builder.Services.AddApplication();
builder.Services.AddInfrastructure();
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