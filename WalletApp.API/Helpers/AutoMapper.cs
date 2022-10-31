using AutoMapper;
using WalletApp.API.Entities;
using WalletApp.API.Models.commands;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Models.Users.Response;

namespace WalletApp.API.Helpers;

public class AutoMapper : Profile
{
    public AutoMapper()
    {
        CreateMap<User, Authenticate>()
            .ForMember(
                dest => dest.RefreshToken,
                opt =>
                    opt.MapFrom(x => x.RefreshTokens.Find(y => y.User.Id == x.Id)!.Token));
        CreateMap<RegisterCommand, User>();
    }
    

}