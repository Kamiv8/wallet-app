namespace WalletApp.Application.Interfaces;

public interface ICurrentUserService
{
    public Domain.Entities.Account? Account { get;  }
}