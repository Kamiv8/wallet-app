using FluentAssertions;
using Moq;
using WalletApp.Application.Common.Account.GetAccountData;
using WalletApp.Application.Consts;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Domain.Entities;
using WalletApp.Domain.Enums;

namespace Application.Tests.Common.GetAccountData;

public class GetAccountDataTest
{
    private readonly Mock<IUserManager> _userManagerMock = new();

    [Fact]
    public async Task Handle_ReturnError_When_Cannot_Find_User()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var query = new GetAccountDataQuery(userId);

        _userManagerMock.Setup(x => x.FindUserAndDataByIdAsync(It.IsAny<Guid>()))
            .ReturnsAsync(() => null);

        var handler = new GetAccountDataQueryHandler(_userManagerMock.Object);

        // Act
        var result = await handler.Handle(query, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(AccountErrorMessages.UserNotExist);
        result.Data.Should().BeNull();
    }


    [Fact]
    public async Task Handle_ReturnSuccess_When_User_Exist()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var query = new GetAccountDataQuery(userId);

        _userManagerMock.Setup(x => x.FindUserAndDataByIdAsync(It.IsAny<Guid>()))
            .ReturnsAsync(new UserIdentity()
                { UserName = "kamiv8", IconType = IconType.Boy, AccountData = new AccountData() });

        var handler = new GetAccountDataQueryHandler(_userManagerMock.Object);

        // Act
        var result = await handler.Handle(query, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Success);
        result.Data.Should().NotBeNull();
    }
}