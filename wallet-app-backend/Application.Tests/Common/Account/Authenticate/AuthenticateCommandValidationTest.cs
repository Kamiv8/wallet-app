using FluentAssertions;
using WalletApp.Application.Common.Account.Authenticate;

namespace Application.Tests.Common.Account.Authenticate;

public class AuthenticateCommandValidationTest
{
    [Theory]
    [InlineData(null, "!Password123")]
    [InlineData("", "")]
    [InlineData("ab", "!Password123")]
    [InlineData("username", "password")]
    [InlineData("username", null)]
    [InlineData("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "!Password123")]
    [InlineData("username", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz")]
    public void Validation_Error(string username, string password)
    {
        // Arrange
        var validator = new AuthenticateCommandValidation();
        var command = new AuthenticateCommand(username, password, default!);

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeFalse();
    }

    [Fact]
    public void Validation_Success()
    {
        // Arrange
        var command = new AuthenticateCommand("username", "!Password123", default!);
        var validator = new AuthenticateCommandValidation();

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeTrue();
    }
}