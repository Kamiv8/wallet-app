using FluentAssertions;
using Moq;
using WalletApp.Application.Common.Account.ChangeLanguage;
using WalletApp.Application.Consts;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Entities;
using WalletApp.Domain.Enums;

namespace Application.Tests.Common.Account.ChangeLanguage;

public class ChangeLanguageTest
{
    private readonly Mock<IUserManager> _userManagerMock = new();
    private readonly Mock<IUnitOfWork> _unitOfWorkMock = new();

    [Fact]
    public async Task Handle_ReturnError_When_Cannot_Find_User()
    {
        // Arrange
        var command = new ChangeLanguageCommand(Guid.Empty, Language.POLISH);
        _userManagerMock.Setup(x => x.FindUserAndDataByIdAsync(It.IsAny<Guid>()))
            .ReturnsAsync(() => null);
        var handler =
            new ChangeLanguageCommandHandler(_userManagerMock.Object, _unitOfWorkMock.Object);

        // Act
        var result = await handler.Handle(command, default!);

        // Assert
        result.Message.Should().Be(CommonErrorMessages.NoUserFromToken);
        result.Status.Should().Be(ApiResultStatus.Error);
    }

    [Fact]
    public async Task Handle_ReturnsSuccess_When_User_Language_Is_Equal_To_Request()
    {
        // Arrange
        var command = new ChangeLanguageCommand(Guid.Empty, Language.POLISH);
        _userManagerMock.Setup(x => x.FindUserAndDataByIdAsync(It.IsAny<Guid>()))
            .ReturnsAsync(new UserIdentity { Language = Language.POLISH });
        var handler =
            new ChangeLanguageCommandHandler(_userManagerMock.Object, _unitOfWorkMock.Object);

        // Act
        var result = await handler.Handle(command, default!);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Success);
        result.Data.Should().Be(new ChangeLanguageResponseDto(Language.POLISH));
    }

    [Fact]
    public async Task Handle_ReturnsSuccess_When_Data_Is_Correct()
    {
        // Arrange
        var command = new ChangeLanguageCommand(Guid.Empty, Language.POLISH);
        _userManagerMock.Setup(x => x.FindUserAndDataByIdAsync(It.IsAny<Guid>()))
            .ReturnsAsync(new UserIdentity { Language = Language.ENGLISH });
        var handler =
            new ChangeLanguageCommandHandler(_userManagerMock.Object, _unitOfWorkMock.Object);

        // Act
        var result = await handler.Handle(command, default!);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Success);
        result.Data.Should().Be(new ChangeLanguageResponseDto(Language.POLISH));
        _unitOfWorkMock.Verify(x => x.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Once);
    }
}