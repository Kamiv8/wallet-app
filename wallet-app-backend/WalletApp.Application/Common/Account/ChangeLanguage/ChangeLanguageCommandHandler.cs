using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;

namespace WalletApp.Application.Common.Account.ChangeLanguage;

public class
    ChangeLanguageCommandHandler : ICommandHandler<ChangeLanguageCommand, ChangeLanguageResponseDto>
{
    private readonly IUserManager _userManager;
    private readonly IUnitOfWork _unitOfWork;

    public ChangeLanguageCommandHandler(IUserManager userManager, IUnitOfWork unitOfWork)
    {
        _userManager = userManager;
        _unitOfWork = unitOfWork;
    }

    public async Task<ApiResult<ChangeLanguageResponseDto>> Handle(ChangeLanguageCommand request,
        CancellationToken cancellationToken)
    {
        var user = await _userManager.FindUserAndDataByIdAsync(request.UserId);
        if (user is null)
            return ApiResult<ChangeLanguageResponseDto>.Error(CommonErrorMessages.NoUserFromToken);
        var response = new ChangeLanguageResponseDto(request.Language);

        if (user.Language == request.Language)
            return ApiResult<ChangeLanguageResponseDto>.Success(response);

        user.Language = request.Language;

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return ApiResult<ChangeLanguageResponseDto>.Success(response);
    }
}