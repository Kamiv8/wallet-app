using FluentAssertions;
using WalletApp.Application.Common.Account.ConfirmRegisterEmail;

namespace Application.Tests.Common.Account.ConfirmRegisterEmail;

public class ConfirmRegisterEmailValidationTest
{

    [Theory]
    [InlineData("", "")]
    [InlineData(null, null)]
    [InlineData(null, "")]
    [InlineData(null, "goodToken")]
    [InlineData("exampleEmail@test.com", null)]
    [InlineData("exampleEmail@test.com", "12345")]
    [InlineData("exampleEmailtest.com", "goodToken")]
    public void Validation_Error(string email, string token)
    {
        // Arrange
        var command = new ConfirmRegisterEmailCommand(email, token);
        var validator = new ConfirmRegisterEmailCommandValidation();
        
        // Act
        var result = validator.Validate(command);
        
        // Assert
        result.IsValid.Should().BeFalse();
    }

    [Theory]
    [InlineData("example@test.com", "goodToken")]
    public void Validation_Success(string email, string token)
    {
        // Arrange
        var command = new ConfirmRegisterEmailCommand(email, token);
        var validator = new ConfirmRegisterEmailCommandValidation();
        
        // Act
        var result = validator.Validate(command);
        
        // Assert
        result.IsValid.Should().BeTrue();   
    }
    
}