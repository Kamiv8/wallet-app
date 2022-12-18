using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.Category;
using WalletApp.API.Models.queries.Categories;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Category;

public class GetDefaultCategoriesQueryHandler : IRequestHandler<DefaultCategoriesQuery, List<DefaultCategoryDto>>
{
    private readonly DataContext _dataContext;
    private readonly IUserService _userService;
    private readonly IMapper _mapper;

    public GetDefaultCategoriesQueryHandler(DataContext dataContext, IUserService userService, IMapper mapper)
    {
        _dataContext = dataContext;
        _userService = userService;
        _mapper = mapper;
    }
    
    public Task<List<DefaultCategoryDto>> Handle(DefaultCategoriesQuery query, CancellationToken cancellationToken)
    {
        var categories = _dataContext.Categories.Where(x => x.User == null).ToList();

        var mCategories = _mapper.Map<List<DefaultCategoryDto>>(categories);
        
        return Task.FromResult(mCategories);
    }
}