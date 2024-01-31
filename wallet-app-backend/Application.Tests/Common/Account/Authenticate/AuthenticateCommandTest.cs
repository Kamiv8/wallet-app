using FluentAssertions;
using Moq;
using WalletApp.Application.Common.Account.Authenticate;
using WalletApp.Application.Consts;
using WalletApp.Application.Dtos;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace Application.Tests.Common.Account.Authenticate;

public class AuthenticateCommandTest
{
    private readonly Mock<IAppSignInManager> _signInManagerMock = new();
    private readonly Mock<IUserManager> _userManagerMock = new();
    private readonly Mock<ITokenRepository> _tokenRepositoryMock = new();
    private readonly Mock<IJWTUtil> _jwtUnit = new();
    private readonly Mock<IUnitOfWork> _unitOfWorkMock = new();


    [Fact]
    public async Task Handle_ReturnSuccess_When_Data_Is_Correct()
    {
        // Arrange
        var command = new AuthenticateCommand("kamiv8", "password", "0,0,0,0");
        var userGuid = Guid.NewGuid();

        var handler = new AuthenticateCommandHandler(_signInManagerMock.Object,
            _userManagerMock.Object, _tokenRepositoryMock.Object, _jwtUnit.Object,
            _unitOfWorkMock.Object);

        _signInManagerMock.Setup(x => x.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>()))
            .ReturnsAsync(new AppSignInResult(true, false, false, false));

        _userManagerMock.Setup(x => x.FindByNameAsync(It.IsAny<string>()))
            .ReturnsAsync(() => new UserIdentity() { Id = userGuid });

        _tokenRepositoryMock.Setup(x => x.GetTokenByIp(It.IsAny<Guid>(), It.IsAny<string>()))
            .ReturnsAsync(new Token()
                { Id = Guid.NewGuid(), RefreshToken = "refreshToken", UserIdentityId = userGuid });

        _jwtUnit.Setup(x => x.GenerateJwtToken(It.IsAny<UserIdentity>()))
            .ReturnsAsync("accessToken");

        _jwtUnit.Setup(x => x.GenerateRefreshToken(It.IsAny<string>()))
            .Returns(() => new Token() { RefreshToken = "refreshToken" });

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Success);
        result.Data.Should().NotBeNull();
        _userManagerMock.Verify(x => x.UpdateAsync(It.IsAny<UserIdentity>()), Times.Once);
        _unitOfWorkMock.Verify(x => x.SaveChangesAsync(default), Times.Once);
    }

    [Fact]
    public async Task Handle_ReturnError_When_Data_Is_Incorrect()
    {
        // Arrange
        var command = new AuthenticateCommand("kamiv8", "password", "0,0,0,0");

        var handler = new AuthenticateCommandHandler(_signInManagerMock.Object,
            _userManagerMock.Object, _tokenRepositoryMock.Object, _jwtUnit.Object,
            _unitOfWorkMock.Object);

        _signInManagerMock.Setup(x => x.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>()))
            .ReturnsAsync(new AppSignInResult(false, false, false, false));

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(AccountErrorMessages.IncorrectPassword);
    }

    [Fact]
    public async Task Handle_ReturnError_When_Cannot_Find_User()
    {
        // Arrange
        var command = new AuthenticateCommand("kamiv8", "password", "0,0,0,0");

        var handler = new AuthenticateCommandHandler(_signInManagerMock.Object,
            _userManagerMock.Object, _tokenRepositoryMock.Object, _jwtUnit.Object,
            _unitOfWorkMock.Object);

        _signInManagerMock.Setup(x => x.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>()))
            .ReturnsAsync(new AppSignInResult(true, false, false, false));

        _userManagerMock.Setup(x => x.FindByNameAsync(It.IsAny<string>()))
            .ReturnsAsync(() => null);

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(AccountErrorMessages.UserNotExist);
    }


    [Fact]
    public async Task Handle_ReturnSuccess_When_Token_Is_New()
    {
        // Arrange
        var command = new AuthenticateCommand("kamiv8", "password", "0,0,0,0");
        var userGuid = Guid.NewGuid();

        var handler = new AuthenticateCommandHandler(_signInManagerMock.Object,
            _userManagerMock.Object, _tokenRepositoryMock.Object, _jwtUnit.Object,
            _unitOfWorkMock.Object);

        _signInManagerMock.Setup(x => x.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>()))
            .ReturnsAsync(new AppSignInResult(true, false, false, false));

        _userManagerMock.Setup(x => x.FindByNameAsync(It.IsAny<string>()))
            .ReturnsAsync(() => new UserIdentity() { Id = userGuid });

        _jwtUnit.Setup(x => x.GenerateJwtToken(It.IsAny<UserIdentity>()))
            .ReturnsAsync("accessToken");

        _jwtUnit.Setup(x => x.GenerateRefreshToken(It.IsAny<string>()))
            .Returns(() => new Token() { RefreshToken = "refreshToken" });

        _tokenRepositoryMock.Setup(x => x.GetTokenByIp(It.IsAny<Guid>(), It.IsAny<string>()))
            .ReturnsAsync(() => null);

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Success);
        result.Data.Should().NotBeNull();
        _tokenRepositoryMock.Verify(x => x.CreateTokenRow(It.IsAny<Token>()), Times.Once);
        _userManagerMock.Verify(x => x.UpdateAsync(It.IsAny<UserIdentity>()), Times.Once);
        _unitOfWorkMock.Verify(x => x.SaveChangesAsync(default), Times.Once);
    }
}