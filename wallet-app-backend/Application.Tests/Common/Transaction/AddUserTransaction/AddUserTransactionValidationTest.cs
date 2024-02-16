using Application.Tests.Helpers;
using FluentAssertions;
using WalletApp.Application.Common.Transaction.AddUserTransaction;

namespace Application.Tests.Common.Transaction.AddUserTransaction;

public class AddUserTransactionValidationTest
{
    public static readonly object[][] CorrectData =
    {
        new object[]
        {
            "Valid Title", 10.5m, new DateTime(2024, 1, 10), true, "dewscription", "#FFFFFF",
            "#000000"
        },
        new object[]
        {
            "Valid Title", 10.5m, new DateTime(2024, 1, 10), false, "dewscription", null!, null!
        },
        new object[]
        {
            "Valid Title", 10.5m, new DateTime(2024, 1, 10), false, null!, null!, null!
        }
    };

    public static readonly object[][] InCorrectData =
    {
        new object[]
        {
            "", 10.5m, new DateTime(2024, 1, 10), true, "dewscription", "#FFFFFF",
            "#000000"
        },
        new object[]
        {
            "valid title", 10.5222m, new DateTime(2024, 1, 10), true, "dewscription", "#FFFFFF",
            "#000000"
        },
        new object[]
        {
            "valid title", 10.52m, DateTime.Today.AddDays(1), true, "dewscription", "#FFFFFF",
            "#000000"
        },
        new object[]
        {
            "valid title", 10.52m, new DateTime(2024, 1, 10), false, "dewscription", "#FFFFFF",
            "#000000"
        },
        new object[]
        {
            "valid title", 10.52m, new DateTime(2024, 1, 10), true, "dewscription", "#FFFFFFdsa",
            "#0000$$00"
        },
    };


    [Theory, MemberData(nameof(InCorrectData))]
    public void Validation_Error(string title, decimal price, DateTime date, bool isDefault,
        string description, string textColor, string backgroundColor)
    {
        // Arrange
        var validator = new AddUserTransactionCommandValidation();
        var command = new AddUserTransactionCommand(GenerateRandomGuid.RandomGuid, title, price,
            GenerateRandomGuid.RandomGuid,
            GenerateRandomGuid.RandomGuid, date, isDefault, description, textColor,
            backgroundColor);

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeFalse();
    }

    [Theory, MemberData(nameof(CorrectData))]
    public void Validation_Success(string title, decimal price, DateTime date, bool isDefault,
        string? description, string? textColor, string? backgroundColor)
    {
        // Arrange
        var validator = new AddUserTransactionCommandValidation();
        var command = new AddUserTransactionCommand(GenerateRandomGuid.RandomGuid, title, price,
            GenerateRandomGuid.RandomGuid,
            GenerateRandomGuid.RandomGuid, date, isDefault, description, textColor,
            backgroundColor);

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeTrue();
    }
}