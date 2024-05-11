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

    public (DateTime startDate, DateTime endDate) GetCurrentMonth(int day)
    {
        var today = DateTime.Today;
        var targetDate = new DateTime(today.Year, today.Month, day);
        var startDate = today.Day < day ? targetDate.AddMonths(-1) : targetDate;
        var endDate = today.Day < day ? targetDate : startDate.AddMonths(1);
    
        return (startDate, endDate);
    }
}