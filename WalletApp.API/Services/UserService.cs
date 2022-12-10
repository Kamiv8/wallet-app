using System.Security.Cryptography;
using AutoMapper;
using Microsoft.Extensions.Options;
using MimeKit.Encodings;
using WalletApp.API.Authorization;
using WalletApp.API.Entities;
using WalletApp.API.Helpers;
using WalletApp.API.Models.Users.Dto;
using WalletApp.API.Models.Users.Response;

namespace WalletApp.API.Services;

public interface IUserService
{
    User GetAccountByResetToken(string token);
    User GetAccountByRefreshToken(string token);
}

public class UserService : IUserService
{
    private readonly DataContext _dataContext;

    public UserService(
        DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    
    public User GetAccountByResetToken(string token)
    {
        var account = _dataContext.Users.SingleOrDefault(x =>
            x.ResetToken == token && x.ResetTokenExpires > DateTime.UtcNow);
        if (account == null) throw new AppException("Invalid token");
        return account;
    }
    public User GetAccountByRefreshToken(string token)
    {
        var user = _dataContext.Users.SingleOrDefault(u => u.RefreshTokens.Any(t => t.Token == token));

        if (user == null)
        {
            throw new AppException("Invalid token");
        }
        return user;
    }



}