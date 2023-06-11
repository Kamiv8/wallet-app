using MediatR;

namespace WalletApp.API.Models;

public class ChangeCurrencyDto
{
    public Guid CurrencyId { get; set; }
}