using MediatR;
using WalletApp.API.Models.enums;

namespace WalletApp.API.Models.commands.Transaction;

public class AddTransactionCommand: IRequest<Unit>
{
    public string Title { get; set; }
    public decimal Price { get; set; }
    public Guid CurrencyId { get; set; }
    public Guid CategoryId { get; set; }
    public DateTime Date { get; set; }
    public string? TextColor { get; set; }
    public string? BackgroundColor { get; set; }
    public bool IsDefault { get; set; }
    public TransactionType Type { get; set; }
    
}