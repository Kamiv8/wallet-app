using MediatR;
using WalletApp.API.Models;
using WalletApp.API.Models.commands.Transaction;

namespace WalletApp.API.Handlers.Transaction;

public class AddTransactionCommandHandler: IRequestHandler<AddTransactionCommand, OperationResult>
{
    public Task<OperationResult> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}