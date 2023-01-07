using AutoMapper;
using WalletApp.API.Entities;
using WalletApp.API.Models.Category;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Models.commands.Transaction;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Models.Currency;
using WalletApp.API.Models.Transaction;
using WalletApp.API.Models.Users.Response;

namespace WalletApp.API.Helpers;

public class AutoMapper : Profile
{
    public AutoMapper()
    {
        CreateMap<Category, DefaultCategoryDto>();

        CreateMap<User, Authenticate>()
            .ForMember(
                dest => dest.RefreshToken,
                opt =>
                    opt.MapFrom(x => x.RefreshTokens.Find(y => y.User.Id == x.Id)!.Token));
        CreateMap<RegisterCommand, User>();
        CreateMap<AddTransactionCommand, Transaction>();
        CreateMap<Currency, CurrencyDto>();
        CreateMap<CreateGroupCommand, Group>();
        CreateMap<Transaction, GetAllTransactionDto>()
            .ForMember(dest => dest.CurrencyMark, 
                opt => opt.MapFrom(x => x.Currency.Mark))
            .ForMember(dest => dest.Category, 
                opt => opt.MapFrom(x => x.Category.Name) );
    }
    

}