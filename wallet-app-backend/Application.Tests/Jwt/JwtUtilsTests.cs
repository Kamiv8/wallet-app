using FluentAssertions;
using Microsoft.Extensions.Options;
using Moq;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Options;
using WalletApp.Domain.Entities;
using WalletApp.Infractructure.JWT;

namespace Application.Tests.Jwt;

public class JwtUtilsTests
{
    private readonly Mock<IUserManager> _userManagerMock = new();
    


    [Fact]
    public async Task GenerateJwtToken_ValidAccount_ReturnsToken()
    {
        // Arrange
        _userManagerMock.Setup(x => x.GetRolesAsync(It.IsAny<UserIdentity>()))
            .ReturnsAsync(new List<string>());
        var mockOptions = Options.Create(new JwtOptions()
        {
            Secret = "cea8a8e1-54fb-4531-8a16-43a988e838c618a6bbfb-bed8-47d1-b342-7dbe6f5c03e88d3f3962-511f-46e2-a09f-e966aba03ea8",
            Issuer = "your-issuer",
            Audience = "your-audience",
            AccessTokenTtl = 30
        });

        var jwtUtil = new JWTUtil(mockOptions, _userManagerMock.Object);

        var account = new UserIdentity()
        {
            Id = Guid.NewGuid(),
            Email = "testEmail@wp.pl"
        };

        // Act
        var token = await jwtUtil.GenerateJwtToken(account);
        
        // Assert
        token.Should().NotBeNull(token);
    }
}