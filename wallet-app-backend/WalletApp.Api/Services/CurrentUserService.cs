using WalletApp.Application.Interfaces;

namespace WalletApp.Services;

public class CurrentUserService : ICurrentUserService
{
    public Guid? Id { get; set; }
    
    
}