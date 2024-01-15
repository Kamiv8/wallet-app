using FluentAssertions;
using Moq;
using WalletApp.Application.Common.Account.Register;
using WalletApp.Application.Consts;
using WalletApp.Application.Dtos;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;
using WalletApp.Domain.Enums;

namespace Application.Tests.Common.Account;

public class RegisterCommandTest
{
    private readonly Mock<IUserManager> _userManagerMock = new();
    private readonly Mock<IAccountDataRepository> _accountDataRepositoryMock = new();
    private readonly Mock<IEmailClient> _emailClientMock = new();

    [Fact]
    public async Task Handle_ReturnError_When_Email_Does_Exist()
    {
        // Arrange
        var command = new RegisterCommand("kamiv8", "kamiv8@test.com", "!Password123",
            "!Password123", IconType.Boy);

        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(() => new UserIdentity());

        var handler = new RegisterCommandHandler(
            _userManagerMock.Object,
            _accountDataRepositoryMock.Object,
            _emailClientMock.Object
        );
        
        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(AccountErrorMessages.EmailNotExist);
    }

    [Fact]
    public async Task Handle_ReturnError_When_User_Exist()
    {
        // Arrange
        var command = new RegisterCommand("kamiv8", "kamiv8@test.com", "!Password123",
            "!Password123", IconType.Boy);

        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(() => null);

        _userManagerMock.Setup(x => x.CreateAsync(It.IsAny<UserIdentity>(), It.IsAny<string>()))
            .ReturnsAsync(new AppIdentityResult() { Succeeded = false });
        
        var handler = new RegisterCommandHandler(_userManagerMock.Object,
            _accountDataRepositoryMock.Object, _emailClientMock.Object);
        
        // Act
        var result = await handler.Handle(command, default);
        
        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(AccountErrorMessages.EmailExist);
    }

    [Fact]
    public async Task Handle_ReturnSuccess_When_Data_Is_Correct()
    {
        // Arrange
        var command = new RegisterCommand("kamiv8", "kamiv8@test.com", "!Password123",
            "!Password123", IconType.Boy);

        _userManagerMock.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
            .ReturnsAsync(() => null);

        _userManagerMock.Setup(x => x.CreateAsync(It.IsAny<UserIdentity>(), It.IsAny<string>()))
            .ReturnsAsync(new AppIdentityResult() { Succeeded = true });

        _userManagerMock.Setup(x => x.GenerateEmailConfirmationTokenAsync(It.IsAny<UserIdentity>()))
            .ReturnsAsync("registerToken");
        
        var handler = new RegisterCommandHandler(_userManagerMock.Object,
            _accountDataRepositoryMock.Object, _emailClientMock.Object);
        
        // Act
        var result = await handler.Handle(command, default);
        
        // Assert
        result.Status.Should().Be(ApiResultStatus.Success);
        _accountDataRepositoryMock.Verify(x => x.CreateAsync(It.IsAny<AccountData>()), Times.Once());
        _emailClientMock.Verify(x => x.SendMailAsync(It.IsAny<EmailClientDto>()), Times.Once());
        result.Message.Should().Be(AccountErrorMessages.RegisterSuccess);
    }

}