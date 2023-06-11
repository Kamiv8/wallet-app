using MediatR;

namespace WalletApp.API.Models.commands.Group;

public class ChangeCurrencyCommand : IRequest<Unit>
{
    public Guid CurrencyId { get; set; }
}