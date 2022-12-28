using WalletApp.API.Entities;

namespace WalletApp.API.Helpers;

public class WalletAppSeeder
{
    private readonly DataContext _context;

    public WalletAppSeeder(DataContext _context)
    {
        this._context = _context;
    }


    public void Seed()
    {
        if (_context.Database.CanConnect())
        {
            if (!_context.NotificationsType.Any())
            {
                var notificationType = GetNotificationTypes();
                _context.NotificationsType.AddRange(notificationType);
                _context.SaveChanges();

            }
            

            if (!_context.Currencies.Any())
            {
                var currencies = GetCurrency();
                _context.Currencies.AddRange(currencies);
                _context.SaveChanges();

            }
            
            if (!_context.Categories.Any())
            {
                var categories = GetCategories();
                _context.Categories.AddRange(categories);
                _context.SaveChanges();

            }

        }
    }
    
    private List<NotificationType> GetNotificationTypes()
    {
        var notificationTypes = new List<NotificationType>()
        {
            new NotificationType()
            {
                Name = "Monthly_Report"
            },
            new NotificationType()
            {
                Name = "Invite_User"
            }
        };

        return notificationTypes;
    }

    private List<Currency> GetCurrency()
    {
        var currencies = new List<Currency>()
        {
            new Currency()
            {
                Name = "United States Dollar",
                Mark = "USD",
                ExchangeRate = (decimal)3.37
            },
            new Currency()
            {
                Name = "Swiss franc",
                Mark = "CHF",
                ExchangeRate = (decimal)4.69
            },
            new Currency()
            {
                Name = "Pound sterling",
                Mark = "GBP",
                ExchangeRate = (decimal)5.28
            },
            new Currency()
            {
                Name = "Euro",
                Mark = "EUR",
                ExchangeRate = (decimal)4.64
            },
            new Currency()
            {
                Name = "Polish złoty",
                Mark = "PLN",
                ExchangeRate = 1
            }
        };
        return currencies;
    }

    private List<Category> GetCategories()
    {
        var categories = new List<Category>()
        {
            new Category()
            {
                Name = "Ticket",
                User = null
            },
            new Category()
            {
                Name = "Home",
                User = null,
            },
            new Category()
            {
                Name = "Eats",
                User = null
            },
            new Category()
            {
                Name = "Bills",
                User = null
            },
            new Category()
            {
                Name = "The remaining",
                User = null
            }
            
        };

        return categories;
    }




}