using AutoMapper;
using WalletApp.API.Entities;
using WalletApp.API.Models.Users.Dto;
using WalletApp.API.Models.Users.Response;

namespace WalletApp.API.Helpers;

public class AutoMapper : Profile
{
    public AutoMapper()
    {
        CreateMap<User, Authenticate>();
        CreateMap<RegisteredDTO, User>();
    }
    

}