using FluentAssertions;
using FluentValidation;
using WalletApp.Application.Common.Account.ChangeLanguage;
using WalletApp.Domain.Enums;

namespace Application.Tests.Common.Account.ChangeLanguage;

public class ChangeLanguageValidationTest : AbstractValidator<ChangeLanguageCommand>
{
    [Theory]
    [InlineData(Language.POLISH)]
    [InlineData(Language.ENGLISH)]
    public void Validation_Success(Language language)
    {
        // Arrange
        var validator = new ChangeLanguageCommandValidation();
        var command = new ChangeLanguageCommand(Guid.Empty, language);

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeTrue();
    }
}