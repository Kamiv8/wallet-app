using WalletApp.Application.Interfaces;

namespace WalletApp.Application.Helpers;

public class Date : IDate
{
    public DateTime Now()
    {
        return DateTime.Now;
    }

    public DateTime Today()
    {
        return DateTime.Today;
    }
    
}