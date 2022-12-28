using MediatR;
using WalletApp.API.Models.Currency;

namespace WalletApp.API.Models.queries.Currency;

public class GetCurrencyQuery : IRequest<List<CurrencyDto>>
{
    
}