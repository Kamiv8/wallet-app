using FluentAssertions;
using WalletApp.Application.Common.Account.ChangeForgotPassword;

namespace Application.Tests.Common.Account.ChangeForgotPassword;

public class ChangeForgotPasswordValidationTest
{
    [Theory]
    [InlineData(null, null, null, null)]
    [InlineData("", "", "", "")]
    [InlineData("invalid_email", "token123", "!Password123", "!Password123")]
    [InlineData("example@email.com", "", "!Password123", "!Password123")]
    [InlineData("example@email.com", "token123", "short", "short")]
    [InlineData("example@email.com", "token123", "!Password123", "password")]
    [InlineData("example@email.com", "token123", "password123", "password123")]
    public void Validation_Error(string email, string token, string password,
        string confirmPassword)
    {
        // Arrange
        var validator = new ChangeForgotPasswordCommandValidation();
        var command = new ChangeForgotPasswordCommand(email, token, password, confirmPassword);

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeFalse();
    }

    [Theory]
    [InlineData("example@email.com", "token123", "!Password123", "!Password123")]
    public void Validation_Success(string email, string token, string password,
        string confirmPassword)
    {
        // Arrange
        var validator = new ChangeForgotPasswordCommandValidation();
        var command = new ChangeForgotPasswordCommand(email, token, password, confirmPassword);

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeTrue();
    }
}