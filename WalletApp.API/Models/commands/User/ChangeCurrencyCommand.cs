using MediatR;

namespace WalletApp.API.Models.commands.User;

public class ChangeCurrencyCommand: IRequest<Unit>
{
    public Guid CurrencyId { get; set; }
}