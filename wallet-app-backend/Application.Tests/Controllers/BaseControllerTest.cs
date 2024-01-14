
using Microsoft.VisualStudio.TestPlatform.TestHost;

namespace Application.Tests.Controllers;

public class BaseControllerTest : IAsyncLifetime
{


    protected HttpClient _httpClient = null;
    
    public Task InitializeAsync()
    {
        
        throw new NotImplementedException();
    }

    public Task DisposeAsync()
    {
        throw new NotImplementedException();
    }
}