using System.Net;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using WalletApp.Application.Options;

namespace WalletApp.Application.Authentication;

public static class AppAuthentication
{
    public static IServiceCollection AddAppAuthentication(this IServiceCollection collection, IConfiguration configuration)
    {
        collection.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                NameClaimType = "https://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
                ValidateAudience = true,
                ValidateIssuer = true,
                ValidAudience = configuration["JWTSettings:Audience"],
                ValidIssuer =  configuration["JWTSettings:Issuer"],
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey =
                    new SymmetricSecurityKey(
                        System.Text.Encoding.UTF8.GetBytes(configuration["JWTSettings:Secret"]))
            };
        });

        return collection;
    }
}