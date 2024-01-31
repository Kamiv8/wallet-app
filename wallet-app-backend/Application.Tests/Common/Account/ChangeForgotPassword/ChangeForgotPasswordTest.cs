using FluentAssertions;
using Moq;
using WalletApp.Application.Common.Account.ChangeForgotPassword;
using WalletApp.Application.Consts;
using WalletApp.Application.Dtos;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Entities;

namespace Application.Tests.Common.Account.ChangeForgotPassword;

public class ChangeForgotPasswordTest
{
    private readonly Mock<IUserManager> _userManagerMock = new();


    [Fact]
    public async Task Handle_ReturnError_When_Cannot_Find_User()
    {
        // Arrange
        var command = new ChangeForgotPasswordCommand("kamiv8@test.com", "resetToken",
            "!Password123", "!Password123");

        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(() => null);

        var handler = new ChangeForgotPasswordCommandHandler(_userManagerMock.Object);

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(AccountErrorMessages.UserNotExist);
    }

    [Fact]
    public async Task Handle_ReturnError_When_Data_Is_Incorrect()
    {
        // Arrange
        var command = new ChangeForgotPasswordCommand("kamiv8@test.com", "resetToken",
            "!Password123", "!Password123");

        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(new UserIdentity());

        _userManagerMock.Setup(x =>
                x.ResetPasswordAsync(It.IsAny<UserIdentity>(), It.IsAny<string>(),
                    It.IsAny<string>()))
            .ReturnsAsync(new AppIdentityResult() { Succeeded = false });
        var handler = new ChangeForgotPasswordCommandHandler(_userManagerMock.Object);

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(AccountErrorMessages.CannotResetPassword);
    }

    [Fact]
    public async Task Handle_ReturnSuccess_When_Data_Is_Correct()
    {
        // Arrange
        var command = new ChangeForgotPasswordCommand("kamiv8@test.com", "resetToken",
            "!Password123", "!Password123");

        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(new UserIdentity());

        _userManagerMock.Setup(x =>
                x.ResetPasswordAsync(It.IsAny<UserIdentity>(), It.IsAny<string>(),
                    It.IsAny<string>()))
            .ReturnsAsync(new AppIdentityResult() { Succeeded = true });

        var handler = new ChangeForgotPasswordCommandHandler(_userManagerMock.Object);

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Success);
        result.Message.Should().Be(AccountErrorMessages.ResetPasswordSuccessful);
    }
}