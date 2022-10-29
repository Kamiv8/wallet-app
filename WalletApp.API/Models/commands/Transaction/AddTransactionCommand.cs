using MediatR;
using WalletApp.API.Models.enums;

namespace WalletApp.API.Models.commands.Transaction;

public class AddTransactionCommand: IRequest<OperationResult>
{
    public string Title { get; set; }
    public decimal Price { get; set; }
    public Currencies Currency { get; set; }
    public string Category { get; set; }
    public DateTime Date { get; set; }
    public string? TextColor { get; set; }
    public string? BackgroundColor { get; set; }
    public bool IsSaved { get; set; }
    
}