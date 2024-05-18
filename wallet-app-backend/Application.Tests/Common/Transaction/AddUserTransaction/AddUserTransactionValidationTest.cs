using Application.Tests.Helpers;
using FluentAssertions;
using WalletApp.Application.Common.Transaction.AddUserTransaction;

namespace Application.Tests.Common.Transaction.AddUserTransaction;

public class AddUserTransactionValidationTest
{
    public static readonly object[][] CorrectData =
    [
        [
            "Valid Title", 10.5m, new DateTime(2024, 1, 10), true, false, "dewscription", "#FFFFFF",
            "#000000"
        ],
        [
            "Valid Title", 10.5m, new DateTime(2024, 1, 10), false, false, "dewscription", null!, null!
        ],
        [
            "Valid Title", 10.5m, new DateTime(2024, 1, 10), false, false, null!, null!, null!
        ]
    ];

    public static readonly object[][] InCorrectData =
    [
        [
            "", 10.5m, new DateTime(2024, 1, 10), true, false, "dewscription", "#FFFFFF",
            "#000000"
        ],
        [
            "valid title", 10.5222m, new DateTime(2024, 1, 10), true, false, "dewscription",
            "#FFFFFF",
            "#000000"
        ],
        [
            "valid title", 10.52m, DateTime.Today.AddDays(1), true, "dewscription", false,
            "#FFFFFF",
            "#000000"
        ],
        [
            "valid title", 10.52m, new DateTime(2024, 1, 10), false, false, "dewscription",
            "#FFFFFF",
            "#000000"
        ],
        [
            "valid title", 10.52m, new DateTime(2024, 1, 10), true, false, "dewscription",
            "#FFFFFFdsa",
            "#0000$$00"
        ]
    ];


    [Theory, MemberData(nameof(InCorrectData))]
    public void Validation_Error(string title, decimal price, DateTime date, bool isDefault,
        bool isTemplate,
        string description, string textColor, string backgroundColor)
    {
        // Arrange
        var validator = new AddUserTransactionCommandValidation();
        var command = new AddUserTransactionCommand(
            GenerateRandomGuid.RandomGuid,
            title,
            price,
            GenerateRandomGuid.RandomGuid,
            GenerateRandomGuid.RandomGuid,
            date, 
            isDefault, 
            isTemplate,
            description, 
            textColor,
            backgroundColor);

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeFalse();
    }

    [Theory, MemberData(nameof(CorrectData))]
    public void Validation_Success(string title, decimal price, DateTime date, bool isDefault, bool isTemplate,
        string? description, string? textColor, string? backgroundColor)
    {
        // Arrange
        var validator = new AddUserTransactionCommandValidation();
        var command = new AddUserTransactionCommand(
            GenerateRandomGuid.RandomGuid,
            title,
            price,
            GenerateRandomGuid.RandomGuid,
            GenerateRandomGuid.RandomGuid,
            date, 
            isDefault, 
            isTemplate,
            description, 
            textColor,
            backgroundColor);

        // Act
        var result = validator.Validate(command);

        // Assert
        result.IsValid.Should().BeTrue();
    }
}