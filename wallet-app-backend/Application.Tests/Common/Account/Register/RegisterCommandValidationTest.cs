using FluentAssertions;
using WalletApp.Application.Common.Account.Register;
using WalletApp.Domain.Enums;

namespace Application.Tests.Common.Account.Register;

public class RegisterCommandValidationTest
{

    [Theory]
    [InlineData(null, "email@example.com", "!Password123", "!Password123", IconType.Boy)]
    [InlineData("ab", "email@example.com", "!Password123", "!Password123", IconType.Girl)]
    [InlineData("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "email@example.com", "!Password123", "!Password123", IconType.Boy)]
    [InlineData("username", null, "!Password123", "!Password123", IconType.Boy)] 
    [InlineData("username", "invalidemail", "!Password123", "!Password123", IconType.Boy)]
    [InlineData("username", "email@example.com", null, "password123", IconType.Boy)]
    [InlineData("username", "email@example.com", "pass", "pass", IconType.Boy)]
    [InlineData("username", "email@example.com", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", IconType.Boy)]
    [InlineData("username", "email@example.com", "password123", "differentpassword", IconType.Boy)]
    public void Validation_Error(string username, string email, string password, string confirmPassword, IconType iconType)
    {
        // Arrange
        var command = new RegisterCommand(username, email, password, confirmPassword, iconType);
        var validator = new RegisterCommandValidation();

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeFalse();
    }

    [Fact]
    public void Validation_Success()
    {
        // Arrange
        var command = new RegisterCommand("username", "username@test.com", "!Password13",
            "!Password13", IconType.Boy);
        var validator = new RegisterCommandValidation();
        
        // Act
        var result = validator.Validate(command);
        
        // Assert
        result.IsValid.Should().BeTrue();
    }
    
    
}