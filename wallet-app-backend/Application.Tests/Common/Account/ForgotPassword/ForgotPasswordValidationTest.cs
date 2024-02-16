using FluentAssertions;
using WalletApp.Application.Common.Account.ForgotPassword;

namespace Application.Tests.Common.Account.ForgotPassword;

public class ForgotPasswordValidationTest
{
    [Theory]
    [InlineData("")]
    [InlineData(null)]
    [InlineData("exampleEmail")]
    [InlineData("exampleEmail.com")]
    public void Validation_Error(string email)
    {
        // Arrange
        var validator = new ForgotPasswordCommandValidation();
        var command = new ForgotPasswordCommand(email);

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeFalse();
    }

    [Theory]
    [InlineData("example@test.com")]
    [InlineData("example@test.com.com")]
    [InlineData("example@test")]
    public void Validation_Success(string email)
    {
        // Arrange
        var validator = new ForgotPasswordCommandValidation();
        var command = new ForgotPasswordCommand(email);

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeTrue();
    }
}