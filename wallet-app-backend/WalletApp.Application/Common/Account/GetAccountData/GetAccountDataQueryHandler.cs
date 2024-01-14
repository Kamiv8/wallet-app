using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;

namespace WalletApp.Application.Common.Account.GetAccountData;

public class
    GetAccountDataQueryHandler : IQueryHandler<GetAccountDataQuery, GetAccountDataResponseDto>
{
    private readonly IUserManager _userManager;

    public GetAccountDataQueryHandler(IUserManager userManager)
    {
        _userManager = userManager;
    }

    public async Task<ApiResult<GetAccountDataResponseDto>> Handle(GetAccountDataQuery request,
        CancellationToken cancellationToken)
    {
        var user = await _userManager.FindUserAndDataByIdAsync(request.UserId);
        if (user is null)
            return ApiResult<GetAccountDataResponseDto>.Error(AccountErrorMessages.UserNotExist);

        var dto = new GetAccountDataResponseDto(
            user.UserName!,
            user.IconType!,
            user.AccountData.ActualMoneyPln,
            user.AccountData.ActualMoneyUsd,
            user.AccountData.ActualMoneyChf,
            user.AccountData.ActualMoneyGbp,
            user.AccountData.ActualMoneyEur,
            user.Language,
            user.Member?.GroupId
        );
        
        return ApiResult<GetAccountDataResponseDto>.Success(dto);
    }
}