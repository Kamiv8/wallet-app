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
            
            if (!_context.Roles.Any())
            {
                var roles = GetDefaultRole();
                _context.Roles.AddRange(roles);
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


    private List<Role> GetDefaultRole()
    {
        var roles = new List<Role>()
        {
            new Role()
            {
                Name = "Admin"
            },
            new Role()
            {
                Name = "Member"
            }
        };
        return roles;

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
                Mark = "USD"
            },
            new Currency()
            {
                Name = "Swiss franc",
                Mark = "CHF"
            },
            new Currency()
            {
                Name = "Pound sterling",
                Mark = "GBP"
            },
            new Currency()
            {
                Name = "Euro",
                Mark = "EUR"
            },
            new Currency()
            {
                Name = "Polish złoty",
                Mark = "PLN"
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
                Name = "Ticket"
            },
            new Category()
            {
                Name = "Home"
            },
            new Category()
            {
                Name = "Eats"
            },
            new Category()
            {
                Name = "Bills"
            },
            new Category()
            {
                Name = "The remaining"
            }
            
        };

        return categories;
    }




}