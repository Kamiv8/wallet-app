﻿
using MediatR;
using WalletApp.API.Models.Transaction;

namespace WalletApp.API.Models.queries.Transaction;

public class GetToMoneyChartQuery : IRequest<List<ToMoenyChartDto>>
{
    
}