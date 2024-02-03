using FluentAssertions;
using Moq;
using WalletApp.Application.Common.Account.ConfirmRegisterEmail;
using WalletApp.Application.Consts;
using WalletApp.Application.Dtos;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Entities;

namespace Application.Tests.Common.Account.ConfirmRegisterEmail;

public class ConfirmRegisterEmailTest
{
    private readonly Mock<IUserManager> _userManagerMock = new();


    [Fact]
    public async Task Handle_ReturnsError_When_Cannot_Find_User()
    {
        // Arrange
        var command = new ConfirmRegisterEmailCommand("example@test.com", "token");
        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(() => null);

        var handler = new ConfirmRegisterEmailCommandHandler(_userManagerMock.Object);

        // Act
        var result = await handler.Handle(command, default!);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(AccountErrorMessages.UserNotExist);
    }

    [Fact]
    public async Task Handle_ReturnsError_When_ConfirmEmail_Is_False()
    {
        // Arrange
        var command = new ConfirmRegisterEmailCommand("example@test.com", "validtoken");
        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(new UserIdentity());
        _userManagerMock.Setup(x => x.ConfirmEmail(It.IsAny<UserIdentity>(), It.IsAny<string>()))
            .ReturnsAsync(new AppIdentityResult() { Succeeded = false });

        var handler = new ConfirmRegisterEmailCommandHandler(_userManagerMock.Object);

        // Act
        var result = await handler.Handle(command, default!);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(AccountErrorMessages.EmailNotConfirm);
    }

    [Fact]
    public async Task Handle_ReturnsError_When_Token_Is_Invalid()
    {
        // Arrange
        var command = new ConfirmRegisterEmailCommand("example@test.com", "$./this_is_an_invalid_token");
        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(new UserIdentity());
        _userManagerMock.Setup(x => x.ConfirmEmail(It.IsAny<UserIdentity>(), It.IsAny<string>()))
            .ReturnsAsync(new AppIdentityResult() { Succeeded = true });

        var handler = new ConfirmRegisterEmailCommandHandler(_userManagerMock.Object);

        // Act
        var result = await handler.Handle(command, default!);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(AccountErrorMessages.InvalidTokenFormat);
        
    }

    [Fact]
    public async Task Handle_ReturnsSuccess_When_Data_Is_Correct()
    {
        // Arrange
        var command = new ConfirmRegisterEmailCommand("example@test.com", "validtoken");
        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(new UserIdentity());
        _userManagerMock.Setup(x => x.ConfirmEmail(It.IsAny<UserIdentity>(), It.IsAny<string>()))
            .ReturnsAsync(new AppIdentityResult { Succeeded = true });

        var handler = new ConfirmRegisterEmailCommandHandler(_userManagerMock.Object);

        // Act
        var result = await handler.Handle(command, default!);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Success);
    }
}