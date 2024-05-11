using WalletApp.Application.Abstractions.Messaging;
using WalletApp.Application.Consts;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace WalletApp.Application.Common.Settings.ChangeDateRange;

public class ChangeDateRangeCommandHandler(IAccountDataRepository accountDataRepository, IUnitOfWork unit) : ICommandHandler<ChangeDateRangeCommand>
{
    public async Task<ApiResult> Handle(ChangeDateRangeCommand request, CancellationToken cancellationToken)
    {

        var accountData =
            await accountDataRepository.GetUserById(request.userId, cancellationToken);

        if (accountData is null) return ApiResult.Error(CommonErrorMessages.NoUserFromToken);

        accountData.DateRangeOption = request.Option;
        accountData.CustomDateRange = request.CustomDate;
        accountData.CustomDayRange = request.CustomDay ?? 1;

        await unit.SaveChangesAsync(cancellationToken);
        
        return ApiResult.Success();
    }
}