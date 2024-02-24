using FluentAssertions;
using Moq;
using WalletApp.Application.Common.Account.ForgotPassword;
using WalletApp.Application.Consts;
using WalletApp.Application.Dtos;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Entities;

namespace Application.Tests.Common.Account.ForgotPassword;

public class ForgotPasswordTest
{
    private readonly Mock<IUserManager> _userManagerMock = new();
    private readonly Mock<IEmailClient> _emailClientMock = new();
    private readonly Mock<IEmailTemplates> _emailTemplateMock = new();


    [Fact]
    public async Task Handle_ReturnError_When_Cannot_Find_User_By_Name()
    {
        // Arrange
        var command = new ForgotPasswordCommand("example@test.com");
        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(() => null);

        var handler =
            new ForgotPasswordCommandHandler(_userManagerMock.Object, _emailClientMock.Object, _emailTemplateMock.Object);

        // Act
        var result = await handler.Handle(command, default!);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Success);
        result.Message.Should().Be(AccountErrorMessages.ResetPasswordSentMail);
    }

    [Fact]
    public async Task Handle_ReturnError_When_Token_Is_Empty()
    {
        // Arrange
        var command = new ForgotPasswordCommand("example@test.com");
        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(new UserIdentity());
        _userManagerMock.Setup(x => x.GeneratePasswordResetTokenAsync(It.IsAny<UserIdentity>()))
            .ReturnsAsync(() => string.Empty);
        var handler =
            new ForgotPasswordCommandHandler(_userManagerMock.Object, _emailClientMock.Object, _emailTemplateMock.Object);
        
        // Act
        var result = await handler.Handle(command, default!);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(CommonErrorMessages.CommonError);
    }

    [Fact]
    public async Task Handle_ReturnSuccess_When_Data_Is_Correct()
    {
        // Arrange
        var command = new ForgotPasswordCommand("example@test.com");
        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(new UserIdentity());
        _userManagerMock.Setup(x => x.GeneratePasswordResetTokenAsync(It.IsAny<UserIdentity>()))
            .ReturnsAsync(() => "resetToken");
        var handler =
            new ForgotPasswordCommandHandler(_userManagerMock.Object, _emailClientMock.Object, _emailTemplateMock.Object);
        
        // Act
        var result = await handler.Handle(command, default!);

        // Assert
        _emailClientMock.Verify(x => x.SendMailAsync(It.IsAny<EmailClientDto>()), Times.Once);
        result.Status.Should().Be(ApiResultStatus.Success);
        result.Message.Should().Be(AccountErrorMessages.ResetPasswordSentMail);
    }

}